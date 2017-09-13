import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import path from 'path';
import createStore from './redux/create';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';

import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import getRoutes from './routes';

import { I18nextProvider, loadNamespaces } from 'react-i18next';
import i18n from './i18n-server';
import { changeLanguage } from 'redux/modules/locale';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);

app.use(Express.static(path.join(__dirname, '..', 'static')));

// TODO добавить определение языка по заголовкам и кукам
app.use((req, res, next) => {
    const langs = ['uk', 'ru'];
    const pathParts = req.path.split('/');

    const [, currentLang] = pathParts;
    if (currentLang === '' || langs.indexOf(currentLang) === -1) {
        const url = `/${langs[0]}${req.url}`;

        return res.redirect(302, url);
    }
    req.language = currentLang;

    return next();
});

app.use((req, res) => {
    if (__DEVELOPMENT__) {
        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        webpackIsomorphicTools.refresh();
    }
    const memoryHistory = createHistory(req.originalUrl);
    const store = createStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store);

    const locale = req.language;
    const resources = i18n.getResourceBundle(locale, 'common');
    const i18nClient = {
        locale,
        resources
    };

    const i18nServer = i18n.cloneInstance();
    i18nServer.changeLanguage(locale);

    function hydrateOnClient() {
        /* eslint-disable prefer-template */
        res.send('<!doctype html>\n'
            + ReactDOM.renderToString(
                <Html assets={ webpackIsomorphicTools.assets() } store={ store } i18n={ i18nClient }/>
            ));
        /* eslint-enable prefer-template */
    }

    if (__DISABLE_SSR__) {
        hydrateOnClient();

        return;
    }

    match({
        history,
        routes: getRoutes(store),
        location: req.originalUrl
    }, (error, redirectLocation, renderProps) => {
        loadNamespaces({ ...renderProps, i18n: i18n }).then(() => {
            if (redirectLocation) {
                res.redirect(redirectLocation.pathname + redirectLocation.search);
            } else if (error) {
                console.error('ROUTER ERROR:', pretty.render(error));
                res.status(500);
                hydrateOnClient();
            } else if (renderProps) {
                loadOnServer({
                    ...renderProps,
                    store
                }).then(() => {
                    const component = (
                        <I18nextProvider i18n={ i18n }>
                            <Provider store={ store } key="provider">
                                <ReduxAsyncConnect { ...renderProps }/>
                            </Provider>
                        </I18nextProvider>
                    );

                    res.status(200);

                    global.navigator = { userAgent: req.headers['user-agent'] };

                    /* eslint-disable prefer-template */
                    res.send('<!doctype html>\n'
                        + ReactDOM.renderToString(
                            <Html
                                assets={ webpackIsomorphicTools.assets() }
                                component={ component }
                                store={ store }
                                i18n={ i18nClient }
                            />
                        )
                    );
                    /* eslint-enable prefer-template */
                });
            } else {
                res.status(404).send('Not found');
            }
        });
    });
});

if (config.port) {
    server.listen(config.port, (err) => {
        if (err) {
            console.error(err);
        }
        console.info('----\n==> ✅  %s is running', config.app.title);
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
    });
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}

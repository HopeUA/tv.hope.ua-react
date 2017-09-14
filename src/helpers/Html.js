import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import gtmParts from 'react-google-tag-manager';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default function Html(props) {
    const { assets, component, store, i18n } = props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();


    const gtm = gtmParts({
        id: 'GTM-MDFP6GM',
        dataLayerName: 'dataLayer'
    });

    return (
        <html lang="ru">
            <head>
                { head.base.toComponent() }
                { head.title.toComponent() }
                { head.meta.toComponent() }
                { head.link.toComponent() }
                { head.script.toComponent() }

                <link rel="apple-touch-icon" type="image/png" href="/static/favicon.png"/>

                { gtm.scriptAsReact() }
                { /* styles (will be present only in production with webpack extract text plugin) */ }
                { Object.keys(assets.styles).map((style) =>
                    <link
                        href={ assets.styles[style] }
                        key={ style }
                        media="screen, projection"
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                    />
                ) }
            </head>
            <body>
                { gtm.noScriptAsReact() }
                <div id="content" dangerouslySetInnerHTML={ { __html: content } }/>
                <script
                    dangerouslySetInnerHTML={ { __html: `window.__data=${serialize(store.getState())};` } }
                    charSet="UTF-8"
                />
                <script dangerouslySetInnerHTML={ { __html: `window.__i18n=${serialize(i18n)};` } } charSet="UTF-8"/>
                <script src={ assets.javascript.main } charSet="UTF-8"/>
            </body>
        </html>
    );
}

Html.propTypes = {
    assets: PropTypes.object.isRequired,
    component: PropTypes.node,
    store: PropTypes.object.isRequired,
    i18n: PropTypes.object.isRequired
};

Html.defaultProps = {
    component: null
};

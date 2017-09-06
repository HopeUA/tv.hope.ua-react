import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { changeLanguage } from 'redux/modules/locale';
import * as Page from 'containers';

const componentRoutes = (
    <Route>
        <IndexRoute component={ Page.Home }/>
        <Route path="news/:id" component={ Page.ArticleSingle }/>
        <Route path="shows/:showId" component={ Page.Show }/>
        <Route path="shows/:showId/:episodeId" component={ Page.Episode }/>

        <Route path="contacts" component={ Page.Contacts }/>
        <Route path="watchUs" component={ Page.WatchUs }/>
        <Route path="about" component={ Page.About }/>
        <Route path="scheduler" component={ Page.Scheduler }/>
        <Route path="*" component={ Page.NotFound } status={ 404 }/>
    </Route>
);

/* eslint-disable react/jsx-no-bind */
export default (store) => {
    return (
        <Route path="/" component={ Page.App }>
            <Route path="uk" onEnter={ () => store.dispatch(changeLanguage('uk')) }>
                { componentRoutes }
            </Route>
            <Route path="ru" onEnter={ () => store.dispatch(changeLanguage('ru')) }>
                { componentRoutes }
            </Route>
            <Route path="*" component={ Page.NotFound } status={ 404 }/>
        </Route>
    );
};

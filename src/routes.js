import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { changeLanguage } from 'redux/modules/locale';
import {
    App,
    Home,
    Contacts,
    WatchUs,
    About,
    Show,
    Episode,
    Articles,
    Scheduler,
    Online,
    NotFound
} from 'containers';

const componentRoutes = (
    <Route>
        <IndexRoute component={ Home }/>
        <Route path="contacts" component={ Contacts }/>
        <Route path="shows/:id" component={ Show }/>
        <Route path="shows/:id/:id" component={ Episode }/>
        <Route path="articles" component={ Articles }/>
        <Route path="watchUs" component={ WatchUs }/>
        <Route path="about" component={ About }/>
        <Route path="scheduler" component={ Scheduler }/>
        <Route path="online" component={ Online }/>
        <Route path="*" component={ NotFound } status={ 404 }/>
    </Route>
);

/* eslint-disable react/jsx-no-bind */
export default (store) => {
    return (
        <Route path="/" component={ App }>
            <Route path="uk" onEnter={ () => store.dispatch(changeLanguage('uk')) }>
                { componentRoutes }
            </Route>
            <Route path="ru" onEnter={ () => store.dispatch(changeLanguage('ru')) }>
                { componentRoutes }
            </Route>
            <Route path="*" component={ NotFound } status={ 404 }/>
        </Route>
    );
};

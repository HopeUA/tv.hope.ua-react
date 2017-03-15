import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { changeLanguage } from 'redux/modules/locale';
import {
    App,
    Home,
    Contacts,
    NotFound
} from 'containers';

const componentRoutes = (
    <Route>
        <IndexRoute component={ Home }/>
        <Route path="contacts" component={ Contacts }/>
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

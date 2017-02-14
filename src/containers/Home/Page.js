import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import getAsyncLoaders from 'utils/getAsyncLoaders';

import Meta from './Meta';
import * as Home from 'components/Home';
import * as Footer from 'components/Footer';
import * as Shared from 'components/Shared';

/**
 * Async data loading
 */
const loaders = getAsyncLoaders([
    {
        component: Home.Episodes,
        params: {
            type: 'new'
        }
    },
    {
        component: Home.Episodes,
        params: {
            type: 'now'
        }
    },
    {
        component: Home.Episodes,
        params: {
            type: 'recommended'
        }
    }
]);
/**
 * END Async data loading
 */

@asyncConnect(
    loaders,
    ({ browser }) => {
        return { browser };
    }
)
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render() {
        const { browser } = this.props;

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header mediaType={ browser.mediaType }/>
                <Shared.Timeline mediaType={ browser.mediaType }/>
                <Home.Banner mediaType={ browser.mediaType }/>
                <Home.Live mediaType={ browser.mediaType }/>
                <Home.Shows mediaType={ browser.mediaType }/>
                <Home.Articles mediaType={ browser.mediaType }/>
                <Home.Top mediaType={ browser.mediaType }/>
                <Home.Episodes
                    title={ 'Сейчас смотрят' }
                    type="now"
                    scrollDisable
                    canRefresh
                    view="grid"
                />
                <Home.Episodes
                    title={ 'Новые выпуски' }
                    type="new"
                    view="grid"
                />
                <Home.Episodes
                    title={ 'Рекомендуемые выпуски' }
                    type="recommended"
                    view="row"
                />
                <Footer.Banners mediaType={ browser.mediaType }/>
                <Footer.Shows mediaType={ browser.mediaType }/>
                <Footer.Form mediaType={ browser.mediaType }/>
                <Footer.Navigation mediaType={ browser.mediaType }/>
            </div>
        );
    }
}

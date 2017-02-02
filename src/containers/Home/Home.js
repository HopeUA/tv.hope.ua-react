import React, { Component, PropTypes } from 'react';
// import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Meta from './Meta';
import * as Home from 'components/Home';
import * as Footer from 'components/Footer';
import * as Shared from 'components/Shared';

// @asyncConnect([{
//     deferred: true,
//     promise: ({ store: { dispatch, getState } }) => {
//         const state = getState();
//         const promises = [];
//
//         return Promise.all(promises);
//     }
// }])
@connect(({ browser }) => {
    return { browser };
})
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
                { /*    <Shared.Header mediaType={ browser.mediaType }/>    */ }
                { /* <Shared.Header mediaType={ browser.mediaType }/> */ }
                <Shared.Timeline mediaType={ browser.mediaType }/>
                <Home.Banner mediaType={ browser.mediaType }/>
                <Home.Live mediaType={ browser.mediaType }/>
                <Home.Shows mediaType={ browser.mediaType }/>
                <Home.Articles mediaType={ browser.mediaType }/>
                <Home.Top mediaType={ browser.mediaType }/>
                <Home.Episodes
                    mediaType={ browser.mediaType }
                    title={ 'Новые выпуски' }
                    dynamic={ false }
                    canRefresh={ false }
                    view="grid"
                />
                <Home.Episodes
                    mediaType={ browser.mediaType }
                    title={ 'Новые выпуски' }
                    dynamic={ false }
                    canRefresh={ false }
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

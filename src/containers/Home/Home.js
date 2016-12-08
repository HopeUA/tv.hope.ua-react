import React, { Component, PropTypes } from 'react';
// import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import Seo from 'data/seo.json';
import { Episodes, Live, Top, Articles, Shows } from 'components/Home';
import * as Footer from 'components/Footer';

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
export default class Home extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired,
        items: PropTypes.array.isRequired,
        dynamic: PropTypes.boolean,
        canRefresh: PropTypes.boolean,
        title: PropTypes.string.isRequired
    };

    render() {
        const { browser } = this.props;

        return (
            <div>
                <Helmet { ...Seo.Home }/>
                <Live mediaType={ browser.mediaType }/>
                <Shows mediaType={ browser.mediaType }/>
                <Articles mediaType={ browser.mediaType }/>
                <Top mediaType={ browser.mediaType }/>
                <Episodes
                    mediaType={ browser.mediaType }
                    title={ "Новые выпуски" }
                    dynamic={ false }
                    canRefresh={ false }
                    view="grid"
                />
                <Episodes
                    mediaType={ browser.mediaType }
                    title={ "Новые выпуски" }
                    dynamic={ false }
                    canRefresh={ false }
                    view="row"
                />
                <Footer.Banners mediaType={ browser.mediaType }/>
                <Footer.Shows mediaType={ browser.mediaType }/>
                <Footer.Form mediaType={ browser.mediaType }/>
            </div>
        );
    }
}

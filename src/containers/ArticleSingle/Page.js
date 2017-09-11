import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import { translate } from 'react-i18next';
import getAsyncLoaders from 'lib/getAsyncLoaders';
import Helmet from 'react-helmet';

import Meta from './Meta';
import * as Articles from 'components/Articles';
import * as Footer from 'components/Footer';
import * as Shared from 'components/Shared';

/**
 * Async data loading
 */
const loaders = getAsyncLoaders([
    {
        component: Shared.Timeline
    },
    {
        component: Articles.Single
    }
]);
/**
 * END Async data loading
 */

/* eslint-disable react/prefer-stateless-function */
@translate(['common'])
@asyncConnect(
    loaders
)
export default class Page extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render = () => {
        const { params } = this.props;

        return (
            <section>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Shared.Timeline/>
                <Articles.Single id={ params.id }/>
                <Footer.Banners/>
                <Footer.Shows/>
                <Footer.Form/>
                <Footer.Navigation/>
            </section>
        );
    }
}

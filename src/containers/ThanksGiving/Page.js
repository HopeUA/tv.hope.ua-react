import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import { translate } from 'react-i18next';
import getAsyncLoaders from 'lib/getAsyncLoaders';
import Helmet from 'react-helmet';

import * as Special from 'components/Special';
// import * as Online from 'components/Online';
import * as Shared from 'components/Shared';
import * as Footer from 'components/Footer';

import Meta from './Meta';

/**
 * Async data loading
 */
const loaders = getAsyncLoaders([
    {
        component: Shared.Timeline
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
        return (
            <section>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Shared.Timeline/>
                <Shared.Title title={ 'Свято подяки' }/>
                <Special.ThanksGiving/>
                <Footer.Banners/>
                <Footer.Shows/>
                <Footer.Navigation/>
            </section>
        );
    }
}

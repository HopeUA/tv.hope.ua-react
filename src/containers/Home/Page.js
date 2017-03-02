import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import Helmet from 'react-helmet';
import getAsyncLoaders from 'lib/getAsyncLoaders';
import { translate } from 'react-i18next';

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
    },
    {
        component: Shared.Timeline
    },
    {
        component: Home.Shows,
        params: {
            type: 'popular'
        }
    }
]);
/**
 * END Async data loading
 */

@translate(['common'])
@asyncConnect(
    loaders
)
class HomePage extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };
    render = () => {
        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Shared.Timeline/>
                <Home.Banner/>
                <Home.Live/>
                <Home.Shows title={ this.props.t('Home.Shows.title') }/>
                <Home.Articles/>
                <Home.Top/>
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
                <Footer.Banners/>
                <Footer.Shows/>
                <Footer.Form/>
                <Footer.Navigation/>
            </div>
        );
    }
}

export default HomePage;

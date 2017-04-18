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
    },
    {
        component: Home.Articles,
        params: {
            type: 'news'
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
        const { t } = this.props;

        return (
            <div>
                <Helmet { ...Meta() }/>
                <Shared.Header/>
                <Shared.Timeline/>
                <Home.Banner/>
                <Home.Live/>
                <Home.Shows title={ t('Home.Shows.title') }/>
                <Home.Articles title={ t('Home.Articles.title') }/>
                <Home.Top/>
                <Home.Episodes
                    title={ t('Home.Episodes.title.now') }
                    type="now"
                    scrollDisable
                    canRefresh
                    view="grid"
                />
                <Home.Episodes
                    title={ t('Home.Episodes.title.new') }
                    type="new"
                    view="grid"
                />
                <Home.Episodes
                    title={ t('Home.Episodes.title.recommended') }
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

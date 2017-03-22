import React, { Component } from 'react';
import { Info } from 'components/WatchUs';
// import { PageHead } from 'components/Shared';
// import LocatorApi from 'api/Locator';
import { translate } from 'react-i18next';
import Meta from './Meta';
import Helmet from 'react-helmet';
import * as Footer from 'components/Footer';

@translate(['Common'])
export default class WatchUs extends Component {
    componentDidMount = () => {
        /* eslint-disable no-undef */
        if (typeof ($) !== 'undefined') {
            $('.header__small-breadcrumbs .container-content')
                .append('<span class="header__small-breadcrumbs-title">Где смотреть телеканал?</span>');
            $('#watchUsLive').click(() => {
                $('.liveStream-show').click();
            });
        }
        /* eslint-enable no-undef */
    };

    render = () => {
        return (
            <section>
                <Helmet { ...Meta() }/>
                <Info/>
                <Footer.Banners/>
                <Footer.Shows/>
                <Footer.Form/>
                <Footer.Navigation/>
            </section>
        );
    }
}

// {/*<PageHead*/}
//     {/*title={ t('headTitle') }*/}
//     {/*description={ t('headDescription') }*/}
//     {/*mediaType={ browser.mediaType }*/}
// {/*/>*/}
// // <Locator regions={ LocatorApi.getRegions() }/>

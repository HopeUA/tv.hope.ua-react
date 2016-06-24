import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { PageHead, Breadcrumbs, Header } from 'components/Shared';
import { Why, Banner, WorldNetwork, IconInfo, Buttons } from 'components/About';

/* eslint-disable react/prefer-stateless-function */
@translate(['About'])
@connect(({ browser }) => {
    return { browser };
})
export default class About extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        browser: PropTypes.object.isRequired
    };

    componentDidMount = () => {
        /* eslint-disable no-undef */
        if (typeof ($) !== 'undefined') {
            $('.header__small-breadcrumbs .container-content')
                .append('<span class="header__small-breadcrumbs-title">О нас</span>');
        }
        /* eslint-enable no-undef */
    };

    render() {
        const { t, browser } = this.props;

        return (
            <section>
                <Header
                    mediaType={ browser.mediaType }
                />
                <Breadcrumbs
                    mediaType={ browser.mediaType }
                />
                <PageHead
                    title={ t('headTitle') }
                    description={ t('headDescription') }
                    mediaType={ browser.mediaType }
                />
                <Why
                    mediaType={ browser.mediaType }
                    t={ t }
                />
                <Banner text={ t('goal') }/>
                <WorldNetwork
                    mediaType={ browser.mediaType }
                    t={ t }
                />
                <IconInfo
                    mediaType={ browser.mediaType }
                />
                <Buttons/>
            </section>
        );
    }
}

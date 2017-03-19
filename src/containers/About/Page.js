import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Banner } from 'components/About';

/* eslint-disable react/prefer-stateless-function */
@translate(['About'])
@connect(({ browser }) => {
    return { browser };
})
export default class About extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
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
        const { t } = this.props;

        return (
            <section>
                <Banner text={ t('goal') }/>
            </section>
        );
    }
}

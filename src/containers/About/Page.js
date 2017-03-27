import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as About from 'components/About';
import Meta from './Meta';
import Helmet from 'react-helmet';

/* eslint-disable react/prefer-stateless-function */
@translate(['common'])
@connect(({ browser }) => {
    return { browser };
})
export default class Page extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render() {
        const { t } = this.props;

        return (
            <section>
                <Helmet { ...Meta() }/>
                <About.Why/>
                <About.Buttons/>
                <About.Banner text={ t('About.Banner.text') }/>
            </section>
        );
    }
}

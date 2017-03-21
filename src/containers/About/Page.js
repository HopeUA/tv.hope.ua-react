import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Banner } from 'components/About';

/* eslint-disable react/prefer-stateless-function */
@translate(['common'])
@connect(({ browser }) => {
    return { browser };
})
export default class About extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render() {
        const { t } = this.props;

        return (
            <section>
                <Banner text={ t('About.Banner.text') }/>
            </section>
        );
    }
}

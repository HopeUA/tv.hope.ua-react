/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

/**
 * [IV]
 * View Import
 */
import Info from './View/Common';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect(({ browser }) => {
    return { browser };
})
@translate(['common'])
class info extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        browser: PropTypes.object.isRequired,
        social: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { browser, social, t } = this.props;

        /**
         * [RR]
         * Return Component
         */
        return (
            <Info mediaType={ browser.mediaType } social={ social } t={ t }/>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default info;

/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Common from './View/Common';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@translate(['common'])
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class WorldNetwork extends Component {

    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        t: PropTypes.func.isRequired,
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { t, mediaType } = this.props;

        /**
         * [RV]
         * View
         */
        const view = (<Common t={ t } mediaType={ mediaType }/>);

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default WorldNetwork;

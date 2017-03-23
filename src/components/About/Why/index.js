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
import Common from './View/Common';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@translate(['common'])
@connect((state) => {
    return {
        locale: state.locale,
        mediaType: state.browser.mediaType
    };
})
class Why extends Component {
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
export default Why;

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
 * [ICONF]
 * Config Import
 */
import config from './config';

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
class Info extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        t: PropTypes.func.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CR]
     * Render function
     */
    render = () => {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType, t } = this.props;

        /**
         * [RV]
         * View
         */
        const view = <Common mediaType={ mediaType } t={ t }/>;

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
export default Info;

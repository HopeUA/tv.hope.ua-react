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
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

/**
 * [IDATA]
 * Data Import (optional)
 */
import items from './Mock/data.json';

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
class Shows extends Component {
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
        const view = BP.isMobile(mediaType) ? null : (
            <Desktop
                mediaType={ mediaType }
                items={ items }
                t={ t }
            />
        );

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
export default Shows;

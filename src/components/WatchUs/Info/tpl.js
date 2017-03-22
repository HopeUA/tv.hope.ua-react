/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Common from './View/Common/tpl';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';

/**
 * [IRDX]
 * Redux connect (optional)
 */
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
        mediaType: PropTypes.string.isRequired
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
        const { mediaType } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RV]
         * View
         */
        const view = <Common mediaType={ mediaType }/>;

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id }>{ view }</PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Info;

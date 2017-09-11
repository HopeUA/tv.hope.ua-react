/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

/**
 * [IV]
 * View Import
 */
import Mobile from './Views/Mobile';
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

Moment.locale('ru');

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        locale: state.locale,
        mediaType: state.browser.mediaType
    };
})

class ThanksGiving extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        locale: PropTypes.string.isRequired,
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
        const { locale, mediaType } = this.props;

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile locale={ locale }/>
            );
        } else {
            view = (
                <Desktop locale={ locale }/>
            );
        }

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
export default ThanksGiving;

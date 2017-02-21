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

/**
 * [IDATA]
 * Data Import (optional)
 */
// TODO получать через api
import items from './Mock/data.json';
const liveUrl = 'https://live-tv.hope.ua/nadia-publish/smil:nadia.smil/playlist.m3u8';
const currentTime = '2016-10-24T09:23:30.000Z';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Live extends Component {
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
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile url={ liveUrl }/>
            );
        } else {
            view = (
                <Desktop
                    mediaType={ mediaType }
                    items={ items }
                    currentTime={ currentTime }
                />
            );
        }

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

export default Live;

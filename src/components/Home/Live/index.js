/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { translate } from 'react-i18next';

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
import timelineConfig from 'components/Shared/Timeline/config';

/**
 * [IDATA]
 * Data Import (optional)
 */
// TODO получать через api
const liveUrl = 'https://live-tv.hope.ua/nadia-publish/smil:nadia.smil/playlist.m3u8';
/**
 * [IRDX]
 * Redux connect (optional)
 */
@translate(['common'])
@connect((state) => {
    const localState = state[timelineConfig.id] ? state[timelineConfig.id] : {};
    const timeLineItems = localState.items ? localState.items : [];
    const items = timeLineItems.filter((element, index) => {
        return moment(element.date)
                .isSameOrAfter(moment()) || moment()
                .isBetween(moment(element.date), moment(timeLineItems[index + 1].date));
    }).slice(0, 3);

    return {
        mediaType: state.browser.mediaType,
        items
    };
})
class Live extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
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
        const { mediaType, items, t } = this.props;

        const currentTime = moment().format();

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
                    t={ t }
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

/**
 * [IE]
 * Export
 */
export default Live;

/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import load from 'load-script';
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
 * [IRDX]
 * Redux connect (optional)
 */
@translate(['common'])
@connect((state) => {
    const localState = state[timelineConfig.id] ? state[timelineConfig.id] : {};
    const timeLineItems = localState.items ? localState.items : [];

    return {
        mediaType: state.browser.mediaType,
        items: timeLineItems
    };
})
class Main extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        items: PropTypes.array.isRequired,
        mediaType: PropTypes.string.isRequired
    };

    componentDidMount = () => {
        setTimeout(() => {
            const script = 'https://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js';
            load(script);
        }, 0);
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
        const { items, mediaType } = this.props;

        if (!items || items.length === 0) {
            return null;
        }

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile
                    items={ items }
                />
            );
        } else {
            view = (
                <Desktop
                    items={ items }
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
export default Main;

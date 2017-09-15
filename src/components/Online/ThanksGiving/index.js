/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import load from 'load-script';
import moment from 'moment';

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
import events from './schedule.json';

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

    state = {
        isOpened: false,
        lang: 'uk',
        eventId: 'nick'
    };

    timer = null;

    componentWillMount() {
        const script = 'https://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js';

        load(script);
        this.updateEvent();
        this.timer = setInterval(this.updateEvent, 1000 * 30);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updateEvent = () => {
        const currentTime = moment();

        let event;
        for (const e of events) {
            if (currentTime.isAfter(moment(e.eventStart))) {
                event = Object.assign({}, e);
            }
        }

        if (event) {
            this.setState({
                eventId: event.id
            });
        }
    };

    handleMenuOpen = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    handleLanguageChange = (lang) => () => {
        const script = 'https://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js';

        load(script);
        this.setState({
            lang,
            isOpened: false
        });
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
        const { lang, eventId } = this.state;

        if (!eventId) {
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
                    eventId={ eventId }
                    events={ events }
                    handleLanguageChange={ this.handleLanguageChange }
                    handleMenu={ this.handleMenuOpen }
                    isOpened={ this.state.isOpened }
                    language={ lang }
                    locale={ locale }
                    streams={ config.streams }
                />
            );
        } else {
            view = (
                <Desktop
                    eventId={ eventId }
                    events={ events }
                    handleLanguageChange={ this.handleLanguageChange }
                    language={ lang }
                    locale={ locale }
                    streams={ config.streams }
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
export default ThanksGiving;

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
        mediaType: state.browser.mediaType
    };
})

class ThanksGiving extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    state = {
        isOpened: false,
        lang: 'uk'
    };

    handleMenuOpen = () => {
        this.setState({
            isOpened: !this.state.isOpened
        });
    };

    handleLanguageChange = (lang) => () => {
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
        const { mediaType } = this.props;
        const { lang } = this.state;

        // const stream = config.streams.find((stream) => {
        //     return stream.id === lang;
        // });

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile
                    handleLanguageChange={ this.handleLanguageChange }
                    handleMenu={ this.handleMenuOpen }
                    isOpened={ this.state.isOpened }
                    language={ lang }
                    streams={ config.streams }
                />
            );
        } else {
            view = (
                <Desktop
                    handleLanguageChange={ this.handleLanguageChange }
                    language={ lang }
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

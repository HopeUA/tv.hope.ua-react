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
import Mobile from './Views/Mobile/tpl';
import Tablet from './Views/Tablet/tpl';
import Desktop from './Views/Desktop/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints, * as BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Header extends Component {
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
     * [CIS]
     * Internal state (optional)
     */
    state = {
        isMenuVisible: false
    };

    handleMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    };

    /**
     * [CR]
     * Render function
     */
    render() {
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
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile
                    mediaType={ mediaType }
                    isMenuVisible={ this.state.isMenuVisible }
                    handleMenu={ this.handleMenu }
                />
            );
        } else if (BP.isTabletPortrait(mediaType)) {
            view = (
                <Tablet mediaType={ mediaType }/>
            );
        } else {
            view = <Desktop/>;
        }

        /**
         * [RPPT]
         * Pixel Perfect templates with state (optional)
         */
        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            BreakPoints.tabletPortrait.name,
            BreakPoints.tabletLandscape.name
        ];

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect templates={ templates } component={ id }>
                { view }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Header;

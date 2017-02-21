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
import Tablet from './Views/Tablet';
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
import * as BP from 'helpers/breakpoints';

/**
 * [IDATA]
 * Data Import (optional)
 */
import Data from './Mock/data.json';

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

class Header extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        locale: PropTypes.string.isRequired
    };

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

    getPosition = (type) => {
        const { mediaType } = this.props;
        const { position } = Data.menu;
        const group = mediaType in position ? mediaType : 'default';
        if (!(type in position[group])) {
            return [];
        }

        return position[group][type];
    };

    filterMenu = (type) => {
        return (element) => {
            return this.getPosition(type).indexOf(element.id) !== -1;
        };
    };

    sortMenu = (type) => {
        return (a, b) => {
            const position = this.getPosition(type);

            return position.indexOf(a.id) - position.indexOf(b.id);
        };
    };

    getWorldwideItem = () => {
        return Data.menu.items.find((element) => {
            return element.id === 'worldwide';
        });
    };

    getMenuItems = (type) => {
        return Data.menu.items.filter(this.filterMenu(type))
            .sort(this.sortMenu(type));
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
        const { mediaType, locale } = this.props;

        /**
         * [RVP]
         * View Props (optional)
         */
        const viewProps = {
            locale,
            mediaType,
            isMenuVisible: this.state.isMenuVisible,
            handleMenu: this.handleMenu,
            socialLinks: Data.socialLinks,
            menu: Data.menu,
            getMenuItems: this.getMenuItems,
            getWorldwideItem: this.getWorldwideItem
        };

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile { ...viewProps }/>
            );
        } else if (BP.isTabletPortrait(mediaType)) {
            view = (
                <Tablet { ...viewProps }/>
            );
        } else {
            view = (
                <Desktop { ...viewProps }/>
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
export default Header;

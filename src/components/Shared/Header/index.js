import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Mobile from './Views/Mobile';
import Tablet from './Views/Tablet';
import Desktop from './Views/Desktop';

import Data from './Mock/data.json';
import * as BP from 'helpers/breakpoints';
import { changeLanguage } from 'redux/modules/locale';

@connect((state) => {
    return {
        locale: state.locale,
        mediaType: state.browser.mediaType
    };
}, (dispatch) => {
    return bindActionCreators({ changeLanguage }, dispatch);
})
export default class Header extends Component {
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        locale: PropTypes.string.isRequired,
        changeLanguage: PropTypes.func.isRequired
    };

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

    render() {
        const { mediaType, locale, changeLanguage } = this.props;

        let view;

        const viewProps = {
            locale,
            mediaType,
            isMenuVisible: this.state.isMenuVisible,
            handleMenu: this.handleMenu,
            socialLinks: Data.socialLinks,
            menu: Data.menu,
            changeLanguage,
            getMenuItems: this.getMenuItems,
            getWorldwideItem: this.getWorldwideItem
        };

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

        return view;
    }
}

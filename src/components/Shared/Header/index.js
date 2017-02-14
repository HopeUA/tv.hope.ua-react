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
    state = {
        isMenuVisible: false
    };

    handleMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
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
            changeLanguage
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

Header.propTypes = {
    mediaType: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired
};

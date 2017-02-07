import React, { PropTypes, Component } from 'react';
import Mobile from './Views/Mobile';
import Tablet from './Views/Tablet';
import Desktop from './Views/Desktop';
import Data from './Mock/data.json';
import BreakPoints from 'helpers/breakpoints';

export default class Header extends Component {
    state = {
        isMenuVisible: false
    };

    handleMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    };

    priorityFilter = (obj) => {
        return obj.priority !== 'low';
    };

    render() {
        const { mediaType } = this.props;

        let view;

        const viewProps = {
            language: Data.language,
            mediaType,
            isMenuVisible: this.state.isMenuVisible,
            handleMenu: this.handleMenu,
            socialLinks: Data.socialLinks,
            menu: Data.menu,
            priorityFilter: this.priorityFilter
        };

        if ([BreakPoints.phonePortrait.name, BreakPoints.phoneLandscape.name].indexOf(mediaType) !== -1) {
            view = (
                <Mobile { ...viewProps }/>
            );
        } else if (BreakPoints.tabletPortrait.name === mediaType) {
            view = (
                <Tablet { ...viewProps }/>
            );
        } else {
            view = (
                <Desktop
                    language={ Data.language }
                    socialLinks={ Data.socialLinks }
                    menu={ Data.menu }
                    priorityFilter={ this.priorityFilter }
                />
            );
        }

        return view;
    }
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired
};

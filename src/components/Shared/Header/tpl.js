import React, { PropTypes, Component } from 'react';
import Mobile from './Views/Mobile/tpl';
import Tablet from './Views/Tablet/tpl';
import Desktop from './Views/Desktop/tpl';
//
import PixelPerfect from 'vendor/PixelPerfect/component';
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

    render() {
        const { mediaType } = this.props;

        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            BreakPoints.tabletPortrait.name,
            BreakPoints.tabletLandscape.name
        ];

        let view;

        if ([BreakPoints.phonePortrait.name, BreakPoints.phoneLandscape.name].indexOf(mediaType) !== -1) {
            view = (
                <Mobile
                    mediaType={ mediaType }
                    isMenuVisible={ this.state.isMenuVisible }
                    handleMenu={ this.handleMenu }
                />
            );
        } else if (BreakPoints.tabletPortrait.name === mediaType) {
            view = (
                <Tablet mediaType={ mediaType }/>
            );
        } else {
            view = <Desktop/>;
        }

        return (
            <PixelPerfect templates={ templates } component="Header">
                { view }
            </PixelPerfect>
        );
    }
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired
};

import React, { PropTypes, Component } from 'react';
import Mobile from './Views/Mobile/tpl';
// import Desktop from './Views/Desktop/tpl';
//
// import PixelPerfect from 'vendor/PixelPerfect/component';
// import BreakPoints from 'helpers/breakpoints';

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

        // const templates = [
        //     BreakPoints.phonePortrait.name,
        //     BreakPoints.phoneLandscape.name,
        //     BreakPoints.tabletPortrait.name,
        //     BreakPoints.tabletLandscape.name
        // ];

        return (
            <Mobile
                mediaType={ mediaType }
                isMenuVisible={ this.state.isMenuVisible }
                handleMenu={ this.handleMenu }
            />
        );
    }
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired
};

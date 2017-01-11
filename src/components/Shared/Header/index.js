import React, { PropTypes, Component } from 'react';
import Mobile from './Views/Mobile';
// import Desktop from './Views/Desktop';
//
// import BreakPoints from 'components/PixelPerfect/breakpoints';
import Data from './Mock/data.json';

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

        return (
            <Mobile
                language={ Data.language }
                mediaType={ mediaType }
                isMenuVisible={ this.state.isMenuVisible }
                handleMenu={ this.handleMenu }
                socialLinks={ Data.socialLinks }
                menu={ Data.menu }
            />
        );
    }
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired
};

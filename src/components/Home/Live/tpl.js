import React, { PropTypes } from 'react';
import MobileView from './Views/Mobile/tpl';
import DesktopView from './Views/Desktop/tpl';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Live(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1;

    return isMobile ? (
        <MobileView/>
    ) : (
        <DesktopView mediaType={ props.mediaType }/>
    );
}

Live.propTypes = {
    mediaType: PropTypes.string.isRequired
};

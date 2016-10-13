import React, { PropTypes } from 'react';
import MobileView from './Views/Mobile.tpl';
import DesktopView from './Views/Desktop.tpl';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Episodes(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1;

    return isMobile ? (
        <MobileView mediaType={ props.mediaType }/>
    ) : (
        <DesktopView/>
    );
}

Episodes.propTypes = {
    mediaType: PropTypes.string.isRequired
};

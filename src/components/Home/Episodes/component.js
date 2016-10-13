import React, { PropTypes } from 'react';
import MobileView from './Views/Mobile';
import DesktopView from './Views/Desktop';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Episodes(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1;

    return isMobile ? (
        <MobileView mediaType={ props.mediaType } items={ props.items }/>
    ) : (
        <DesktopView items={ props.items }/>
    );
}

Episodes.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array
};

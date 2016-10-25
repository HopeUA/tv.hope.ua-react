import React, { PropTypes } from 'react';
import MobileView from './Views/Mobile';
import DesktopView from './Views/Desktop';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Live(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1;

    const { url, items, currentTime } = props;

    return isMobile ? (
        <MobileView url={ url }/>
    ) : (
        <DesktopView
            mediaType={ props.mediaType }
            items={ items }
            currentTime={ currentTime }
        />
    );
}

Live.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array,
    url: PropTypes.string.isRequired,
    currentTime: PropTypes.string.isRequired
};

import React, { PropTypes } from 'react';
import Desktop from './Views/Desktop/tpl';
import Mobile from './Views/Mobile/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

export default function Top(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(props.mediaType) !== -1 ? <Mobile/> : <Desktop mediaType={ props.mediaType }/>;

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="Top" opacity="40">
            { isMobile }
        </PixelPerfect>
    );
}

Top.propTypes = {
    mediaType: PropTypes.string.isRequired
};

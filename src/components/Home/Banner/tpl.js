import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/tpl';
import Desktop from './Views/Desktop/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

export default function Banner(props) {
    const { mediaType } = props;

    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(mediaType) !== -1 ? <Mobile mediaType={ mediaType }/> : <Desktop mediaType={ mediaType }/>;

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect component="Home.Banner" opacity="40" templates={ templates }>
            { component }
        </PixelPerfect>
    );
}

Banner.propTypes = {
    mediaType: PropTypes.string.isRequired
};

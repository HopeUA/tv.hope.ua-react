import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/tpl';
import Desktop from './Views/Desktop/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

export default function Articles(props) {
    const { mediaType } = props;

    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? <Mobile mediaType={ mediaType }/> : <Desktop/>;

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect component="Articles" opacity="40" templates={ templates }>
            { component }
        </PixelPerfect>
    );
}

Articles.propTypes = {
    mediaType: PropTypes.string.isRequired
};

import React, { PropTypes } from 'react';
import Desktop from './Views/Desktop/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

export default function Shows(props) {
    const { mediaType } = props;

    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? null : <Desktop/>;

    const templates = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect component="Shows" opacity="40" templates={ templates }>
            { component }
        </PixelPerfect>
    );
}

Shows.propTypes = {
    mediaType: PropTypes.string.isRequired
};

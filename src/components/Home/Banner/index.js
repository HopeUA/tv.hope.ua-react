import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/';
import Desktop from './Views/Desktop/';

import items from './Mock/data.json';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Banner(props) {
    const { mediaType } = props;
    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(mediaType) !== -1 ?
            (<Mobile mediaType={ mediaType } items={ items }/>) : (<Desktop mediaType={ mediaType } items={ items }/>)
    ;

    return component;
}

Banner.propTypes = {
    mediaType: PropTypes.string.isRequired
};

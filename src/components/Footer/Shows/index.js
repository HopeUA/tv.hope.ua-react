import React, { PropTypes } from 'react';
import Shows from './Views/Desktop';
import BreakPoints from 'components/PixelPerfect/breakpoints';

import items from './Mock/data.json';

export default function Component(props) {
    const { mediaType } = props.mediaType;

    return [BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? null : (<Shows mediaType={ props.mediaType } items={ items }/>);
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};

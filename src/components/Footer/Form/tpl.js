import React, { PropTypes } from 'react';
import Form from './Views/Desktop/tpl';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Component(props) {
    const { mediaType } = props;

    return [BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? null : (<Form/>);
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};

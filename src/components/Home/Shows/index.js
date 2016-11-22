import React, { PropTypes } from 'react';
import Desktop from './Views/Desktop/index';

import items from './Mock/data.json';
import BreakPoints from 'components/PixelPerfect/breakpoints';

// TODO Забирать данные по api
// import items from './Mock/data.json';

export default function Articles(props) {
    const { mediaType } = props;
    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? null : <Desktop items={ items }/>;

    return component;
}

Articles.propTypes = {
    mediaType: PropTypes.string.isRequired
};

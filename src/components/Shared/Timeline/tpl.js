import React, { PropTypes } from 'react';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Desktop from './View/Desktop/tpl';

export default function TimeLine(props) {
    const { mediaType } = props;

    return [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name].indexOf(mediaType) !== -1 ? null : (<Desktop mediaType={ mediaType }/>)
    ;
}

TimeLine.propTypes = {
    mediaType: PropTypes.string
};

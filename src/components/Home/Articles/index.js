import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/';
import Desktop from './Views/Desktop/index';

import items from './Mock/data.json';
import BreakPoints from 'helpers/breakpoints';

// TODO Забирать данные по api
// import items from './Mock/data.json';

export default function Articles(props) {
    const { mediaType } = props;
    const component = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1 ? <Mobile mediaType={ mediaType } items={ items }/> : <Desktop items={ items }/>;

    return component;
}

Articles.propTypes = {
    mediaType: PropTypes.string.isRequired
};

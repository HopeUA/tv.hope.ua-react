import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile';
import Desktop from './Views/Desktop';

import BreakPoints from 'helpers/breakpoints';

import items from './Mock/data.json';

export default function Top(props) {
    return [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1 ?
        <Mobile
            items={ items }
        /> : <Desktop
            mediaType={ props.mediaType }
            items={ items }
        />
    ;
}

Top.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.object
};

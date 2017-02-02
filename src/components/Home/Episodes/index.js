import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/';
import DesktopGrid from './Views/DesktopGrid';
import DesktopRow from './Views/DesktopRow/index';

import BreakPoints from 'helpers/breakpoints';

// TODO Забирать данные по api
import items from './Mock/data.json';

export default function Episodes(props) {
    const { mediaType, view } = props;

    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1;

    let component = null;

    if (isMobile) {
        component = <Mobile mediaType={ mediaType } items={ items }/>;
    } else {
        switch (view) {
            case 'grid':
                component = <DesktopGrid items={ items }/>;
                break;
            case 'row':
                component = <DesktopRow items={ items }/>;
                break;
            default:
                component = null;
        }
    }

    return component;
}

Episodes.propTypes = {
    mediaType: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired
};

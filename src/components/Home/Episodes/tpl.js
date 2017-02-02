import React, { PropTypes } from 'react';
import Mobile from './Views/Mobile/tpl';
import DesktopGrid from './Views/DesktopGrid/tpl';
import DesktopRow from './Views/DesktopRow/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

export default function Episodes(props) {
    const { mediaType, view } = props;

    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(mediaType) !== -1;

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        {
            name: BreakPoints.tabletPortrait.name,
            states: ['grid', 'row']
        },
        {
            name: BreakPoints.tabletLandscape.name,
            states: ['grid', 'row']
        }
    ];

    let component = null;

    if (isMobile) {
        component = <Mobile mediaType={ mediaType }/>;
    } else {
        switch (view) {
            case 'grid':
                component = <DesktopGrid/>;
                break;
            case 'row':
                component = <DesktopRow/>;
                break;
            default:
                component = null;
        }
    }

    return (
        <PixelPerfect
            templates={ templates }
            component="Episodes"
            opacity="40"
            state="row"
        >
            { component }
        </PixelPerfect>);
}

Episodes.propTypes = {
    mediaType: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired
};

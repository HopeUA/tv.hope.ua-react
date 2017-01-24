import React, { PropTypes } from 'react';
import MobileView from './Views/Mobile/index';
import DesktopView from './Views/Desktop/index';

import BreakPoints from 'helpers/breakpoints';

// TODO получать через api
import items from './Mock/data.json';
const liveUrl = 'https://live-tv.hope.ua/nadia-publish/smil:nadia.smil/playlist.m3u8';
const currentTime = '2016-10-24T09:23:30.000Z';

export default function Live(props) {
    const isMobile = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1;

    return isMobile ? (
        <MobileView url={ liveUrl }/>
    ) : (
        <DesktopView
            mediaType={ props.mediaType }
            items={ items }
            currentTime={ currentTime }
        />
    );
}

Live.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array,
    url: PropTypes.string,
    currentTime: PropTypes.string
};

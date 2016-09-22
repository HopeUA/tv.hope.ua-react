import React, { PropTypes } from 'react';
import EpisodesMobile from './EpisodesMobile/component';
import EpisodesDesktop from './EpisodesDesktop/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Episodes(props) {
    Episodes.propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    const selection = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name].indexOf(props.mediaType) !== -1 ?
        (<EpisodesMobile mediaType={ props.mediaType } items={ props.items }/>)
        : (<EpisodesDesktop items={ props.items }/>);

    return (selection);
}

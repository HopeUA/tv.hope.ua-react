/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import moment from 'moment';
import cx from 'classnames';
import px from 'lib/px';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Timeline(props) {
    const { mediaType, serverTime, items } =  props;

    if (!items || items.length === 0) {
        return null;
    }

    let timelineStart;

    if (BP.isTabletLandscape(mediaType)) {
        timelineStart = 470;
    } else if (BP.isDesktop(mediaType, true)) {
        timelineStart = 776;
    } else if (BP.isDesktopWide(mediaType)) {
        timelineStart = 1030;
    } else if (BP.isDesktopHD(mediaType)) {
        timelineStart = 1140;
    } else if (BP.isDesktopMega(mediaType)) {
        timelineStart = 1580;
    }

    const sizes = {
        hourWidth: 600,
        minWidth: 200,
        episodesMargin: 30,
        timelineStart,
        timelineOffset: 5,
        clockWidth: 72
    };

    const currentTime = moment(serverTime);

    let timelineOffset = sizes.timelineStart + (sizes.clockWidth / 2) - sizes.timelineOffset;
    const episodes = items.map((element, index) => {
        const startCurrentEpisode = moment(element.date);
        if (!items[index + 1]) {
            return null;
        }

        const isCurrent = currentTime.isSameOrAfter(element.date)
            && currentTime.isBefore(items[index + 1].date);
        const isPast = currentTime.isAfter(element.date) && !isCurrent;

        const startNextEpisode = moment(items[index + 1].date);
        const difference = startNextEpisode.diff(startCurrentEpisode, 'seconds');
        let width = ((difference / 60) / 60) * sizes.hourWidth;
        if (width < sizes.minWidth) {
            width = sizes.minWidth;
        }
        const episodeStyle = {
            width: `${px(width, mediaType)}vw`
        };

        const nextStyle = {};
        const prevStyle = {};

        if (isPast) {
            timelineOffset -= width + sizes.episodesMargin;
        }

        if (isCurrent) {
            const episodeProgress = currentTime.diff(startCurrentEpisode, 'seconds');
            const episodeProgressWidth =  episodeProgress / 60 / 60 * sizes.hourWidth;
            const translation = (episodeProgressWidth * 100) / width;

            timelineOffset -= episodeProgressWidth;

            prevStyle.width = `${translation}%`;
            nextStyle.width = `${100 - translation}%`;
        }

        const episodeClass = cx({
            [Styles.episode]: true,
            [Styles.current]: isCurrent,
            [Styles.past]: isPast,
            [Styles.future]: !isCurrent && !isPast
        });

        return (
            <div key={ element.id } className={ episodeClass } style={ episodeStyle }>
                <div className={ Styles.timeline }>
                    <div className={ Styles.prev } style={ prevStyle }/>
                    <div className={ Styles.next } style={ nextStyle }/>
                </div>
                <div className={ Styles.info }>
                    <span className={ Styles.time }>{ moment(element.date).format('LT') }</span>
                    <span className={ Styles.label }/>
                </div>
                { !BP.isTabletLandscape(mediaType) ? (
                    <p className={ Styles.title }>{ element.show.title }</p>
                    ) : null }
            </div>
        );
    });

    const episodesStyle = {
        transform: `translateX(${px(timelineOffset, mediaType)}vw)`
    };

    return (
        <section className={ Styles.timelineComponent }>
            <div className={ Styles.scheduler }>
                <div className={ Styles.clock }>
                    <span>{ moment(currentTime).format('LT') }</span>
                </div>
                <div className={ Styles.episodes } style={ episodesStyle }>
                    { episodes }
                </div>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Timeline.propTypes = {
    mediaType: PropTypes.string.isRequired,
    serverTime: PropTypes.string.isRequired,
    items: PropTypes.array
};

/**
 * [CDP]
 * Component default props
 */
Timeline.defaultProps = {
    items: []
};

/**
 * [IE]
 * Export
 */
export default Timeline;

import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import BreakPoints from 'helpers/breakpoints';
import cx from 'classnames';
import px from 'helpers/px';
import Moment from 'moment';

const sizes = {
    hourWidth: 600,
    minWidth: 200,
    episodesMargin: 30,
    timelineStart: 470,
    timelineOffset: 5,
    clockWidth: 72
};

export default function Timeline(props) {
    const { mediaType, serverTime, items } =  props;
    const currentTime = Moment(serverTime);
    const isDesktop = [
        BreakPoints.desktop.name,
        BreakPoints.desktopWide.name,
        BreakPoints.desktopHD.name,
        BreakPoints.desktopMega.name
    ].indexOf(mediaType) !== -1
    ;

    let timelineOffset = -sizes.timelineStart - (sizes.clockWidth / 2) + sizes.timelineOffset;
    const episodes = items.map((element, index) => {
        const startCurrentEpisode = Moment(element.date);
        if (!items[index + 1]) {
            return null;
        }

        const isCurrent = currentTime.isSameOrAfter(element.date)
            && currentTime.isBefore(items[index + 1].date);
        const isPast = currentTime.isAfter(element.date) && !isCurrent;

        const startNextEpisode = Moment(items[index + 1].date);
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
            timelineOffset += width + sizes.episodesMargin;
        }

        if (isCurrent) {
            const episodeProgress = currentTime.diff(startCurrentEpisode, 'seconds');
            const episodeProgressWidth =  episodeProgress / 60 / 60 * sizes.hourWidth;
            const translation = (episodeProgressWidth * 100) / width;

            timelineOffset += episodeProgressWidth;

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
                    <div className={ Styles.prev } style={ prevStyle }></div>
                    <div className={ Styles.next } style={ nextStyle }></div>
                </div>
                <div className={ Styles.info }>
                    <span className={ Styles.time }>{ Moment(element.date).format('LT') }</span>
                    <span className={ Styles.label }/>
                </div>
                { isDesktop ? (
                    <p className={ Styles.title }>Богослужение в храме</p>
                    ) : null }
            </div>
        );
    });

    const episodesStyle = {
        transform: `translateX(-${px(timelineOffset, mediaType)}vw)`
    };

    return (
        <section className={ Styles.timelineComponent }>
            <div className={ Styles.scheduler }>
                <div className={ Styles.clock }>
                    <span>{ Moment(currentTime).format('LT') }</span>
                </div>
                <div className={ Styles.episodes } style={ episodesStyle }>
                    { episodes }
                </div>
            </div>
        </section>
    );
}

Timeline.propTypes = {
    mediaType: PropTypes.string.isRequired,
    serverTime: PropTypes.string,
    items: PropTypes.array
};

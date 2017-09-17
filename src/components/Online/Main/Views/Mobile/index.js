import React, { PropTypes } from 'react';
import moment from 'moment';

import Brightcove from 'vendor/Brightcove';

import Styles from './Styles/main.scss';

export default function Common(props) {
    const { items } = props;
    const currentTime = moment();
    let currentEpisode;
    let nextEpisode;
    for (let i = 0; i < items.length; i++) {
        if (moment(items[i].date).isAfter(currentTime)) {
            currentEpisode = items[i - 1];
            nextEpisode = items[i];
            break;
        }
    }

    const startTime = moment(currentEpisode.date);
    const endTime = moment(nextEpisode.date);

    let description = currentEpisode.episode.description === '' ?
        currentEpisode.show.description.short
        : currentEpisode.episode.description;
    const index = description.indexOf('<');
    description = description.slice(0, index - 1);

    let episodeProgress = (
        moment(currentTime).unix() - moment(currentEpisode.date).unix()
    ) / (
        moment(nextEpisode.date).unix() - moment(currentEpisode.date).unix()
    ) * 100;

    if (episodeProgress > 100) {
        episodeProgress = 100;
    } else if (episodeProgress < 0) {
        episodeProgress = 0;
    }

    const progressStyle = {
        width: `${episodeProgress}%`
    };

    const accountId = '5467539707001';
    const playerId = 'BJgK0Gh85Z';
    const videoId = '5468565950001';

    return (
        <section className={ Styles.mainComponent }>
            <div className={ Styles.wrapVideo }>
                <div className={ Styles.video }>
                    <Brightcove
                        accountId={ accountId }
                        autoplay
                        playerId={ playerId }
                        videoId={ videoId }
                    />
                </div>
            </div>
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>{ currentEpisode.episode.title }</h1>
                <h2 className={ Styles.subtitle }>{ currentEpisode.show.title }</h2>
                <div className={ Styles.bar }>
                    <span className={ Styles.startTime }>
                        { moment(startTime).format('LT') }
                    </span>
                    <div className={ Styles.timeLineContainer }>
                        <div className={ Styles.scale }>
                            <div className={ Styles.progress } style={ progressStyle }>
                                <span/>
                            </div>
                        </div>
                    </div>
                    <span className={ Styles.endTime }>
                        { moment(endTime).format('LT') }
                    </span>
                </div>
                <p className={ Styles.description }>
                    { description }
                </p>
            </div>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired
};

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import moment from 'moment';

import Brightcove from 'vendor/Brightcove';
import Flag from 'components/Assets/Icons/Flag';
import SignsFlag from 'components/Assets/Icons/SignsFlag';
import Youtube from 'react-youtube';

import Styles from './Styles/main.scss';

class Common extends Component {
    static propTypes = {
        eventId: PropTypes.string.isRequired,
        events: PropTypes.array.isRequired,
        handleLanguageChange: PropTypes.func.isRequired,
        language: PropTypes.string.isRequired,
        locale: PropTypes.string.isRequired,
        streams: PropTypes.array.isRequired,
        playerType: PropTypes.string.isRequired
    };

    render() {
        const {
            eventId,
            events,
            handleLanguageChange,
            language,
            locale,
            streams,
            playerType
        } = this.props;

        const currentEvent = events.find((event) => event.id === eventId);

        const currentStream = currentEvent.id === 'nick' ?
            streams.find((stream) => stream.id === language)
            : streams.find((stream) => stream.id === currentEvent.streamId);

        const {
            sources: {
                youtube: {
                    videoId: youtubeId
                },
                brightcove: {
                    accountId,
                    playerId,
                    videoId: brightcoveId
                }
            }
        } = currentStream;

        const playerParams = {
            playerVars: {
                autoplay: 1,
                iv_load_policy: 3, // eslint-disable-line
                hl: language === 'signs' ? 'ru' : language,
                modestbranding: 1,
                rel: 0
            },
            height: '720',
            width: '1280'
        };

        let player = <div/>;
        switch (playerType) {
            case 'brightcove':
                player = (
                    <div className={ Styles.video }>
                        <Brightcove
                            accountId={ accountId }
                            autoplay
                            playerId={ playerId }
                            videoId={ brightcoveId }
                        />
                    </div>
                );
                break;

            case 'youtube':
                player = (
                    <div className={ Styles.video }>
                        <Youtube
                            className={ Styles.video }
                            opts={ playerParams }
                            videoId={ youtubeId }
                        />
                    </div>
                );
                break;

            default:
                break;
        }

        const languages = currentEvent.streamId === 'all' ? (
            <div className={ Styles.languages }>
                {
                    streams.reduce((result, stream) => {
                        const itemStyles = cx({
                            [Styles.item]: true,
                            [Styles.active]: stream.id === language
                        });

                        if (!stream.hidden) {
                            result.push(
                                <div
                                    className={ itemStyles }
                                    key={ stream.id }
                                    onClick={ handleLanguageChange(stream.id) }
                                >
                                    {
                                        stream.id === 'signs' ? (
                                            <SignsFlag language={ stream.id } className={ Styles.signs }/>
                                        ) : (
                                            <Flag language={ stream.id } className={ Styles.flag }/>
                                        )
                                    }
                                    <span className={ Styles.language }>{ stream.title }</span>
                                </div>
                            );
                        }

                        return result;
                    }, [])
                }
            </div>
        ) : null;

        let eventProgress = (
            moment().unix() - moment(currentEvent.timeline.start).unix()
        ) / (
            moment(currentEvent.timeline.end).unix() - moment(currentEvent.timeline.start).unix()
        ) * 100;
        if (eventProgress > 100) {
            eventProgress = 100;
        } else if (eventProgress < 0) {
            eventProgress = 0;
        }

        const progressStyle = {
            width: `${eventProgress}%`
        };

        const event = (
            <div className={ Styles.event }>
                <h1 className={ Styles.title }>
                    {
                        locale === 'uk' ?
                            currentEvent.meta.title.uk
                            : currentEvent.meta.title.ru
                    }
                </h1>
                <h2 className={ Styles.subtitle }>
                    {
                        locale === 'uk' ?
                            currentEvent.meta.subtitle.uk
                            : currentEvent.meta.subtitle.ru
                    }
                </h2>
                <div className={ Styles.bar }>
                    <span className={ Styles.startTime }>
                        { moment(currentEvent.timeline.start).format('LT') }
                    </span>
                    <div className={ Styles.timeLineContainer }>
                        <div className={ Styles.scale }>
                            <div className={ Styles.progress } style={ progressStyle }>
                                <span/>
                            </div>
                        </div>
                    </div>
                    <span className={ Styles.endTime }>
                        { moment(currentEvent.timeline.end).format('LT') }
                    </span>
                </div>
                {
                    currentEvent.id === 'nick' ? (
                        <p className={ Styles.description }>
                            {
                                locale === 'uk' ? currentEvent.meta.description.uk
                                    : currentEvent.meta.description.ru
                            }

                        </p>
                    ) : null
                }
            </div>
        );

        const schedule = (
            <ul className={ Styles.schedule }>
                <h1>
                    {
                        locale === 'uk' ? 'Розклад подій' : 'Расписание событий'
                    }
                </h1>
                {
                    events.map((event) => {
                        const timeStart = moment(event.timeline.start).format('LT');
                        const timeEnd = moment(event.timeline.end).format('LT');

                        return (
                            <li
                                className={ Styles.item }
                                key={ event.id }
                            >
                                <span className={ Styles.time }>{ timeStart }</span>
                                <span className={ Styles.time }>-</span>
                                <span className={ Styles.time }>{ timeEnd }</span>
                                <span className={ Styles.title }>
                                    {
                                        locale === 'uk' ?
                                            event.meta.title.uk
                                            : event.meta.title.ru
                                    }
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        );

        return (
            <section className={ Styles.mainComponent }>
                { player }
                <div className={ Styles.info }>
                    { languages }
                    { event }
                    { schedule }
                </div>
            </section>
        );
    }
}

export default Common;

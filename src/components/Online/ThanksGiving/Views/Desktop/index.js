import React, { Component, PropTypes } from 'react';
import Moment from 'moment';
import cx from 'classnames';

import Flag from 'components/Assets/Icons/Flag';
import Brightcove from '../../../Brightcove';
import Youtube from 'react-youtube';
import SignsFlag from 'components/Assets/Icons/SignsFlag';

import Styles from './Styles/main.scss';

Moment.locale('ru');

export default class Common extends Component {
    // в episodeProgress нужно передать, начало программы, текущее время и конец программы

    // const episodeProgress = (100 / (Moment(next.date).unix() - Moment(current.date).unix())
    // * (Moment(currentTime).unix() - Moment(current.date).unix()));
    //
    // const progressStyle = {
    //     width: `${episodeProgress}%`
    // };
    static propTypes = {
        handleLanguageChange: PropTypes.func.isRequired,
        language: PropTypes.string.isRequired,
        streams: PropTypes.array.isRequired,
        playerType: PropTypes.string
    };

    static defaultProps = {
        playerType: 'brightcove'
    };

    render() {
        const {
            handleLanguageChange,
            language,
            streams,
            playerType
        } = this.props;

        const progressStyle = {
            width: '76%'
        };

        const flags = streams.map((stream) => {
            const itemStyles = cx({
                [Styles.item]: true,
                [Styles.active]: stream.id === language
            });

            return (
                <div className={ itemStyles } key={ stream.id } onClick={ handleLanguageChange(stream.id) }>
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
        });

        const currentStream = streams.find((stream) => stream.id === language);

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
                    <Brightcove
                        accountId={ accountId }
                        playerId={ playerId }
                        videoId={ brightcoveId }
                    />
                );
                break;

            case 'youtube':
                player = (
                    <Youtube
                        className={ Styles.video }
                        opts={ playerParams }
                        videoId={ youtubeId }
                    />
                );
                break;

            default:
                break;
        }

        return (
            <section className={ Styles.mainComponent }>
                <div className={ Styles.video }>
                    { player }
                </div>
                <div className={ Styles.info }>
                    <div className={ Styles.languages }>
                        { flags }
                    </div>
                    <h1 className={ Styles.title }>Свято Подяки: Нік Вуйчич</h1>
                    <h2 className={ Styles.subTitle }>Хліб щоденний</h2>
                    <div className={ Styles.bar }>
                        <span className={ Styles.startTime }>16:30</span>
                        <div className={ Styles.timeLineContainer }>
                            <div className={ Styles.scale }>
                                <div className={ Styles.progress } style={ progressStyle }>
                                    <span/>
                                </div>
                            </div>
                        </div>
                        <span className={ Styles.endTime }>17:30</span>
                    </div>
                    <p className={ Styles.description }>
                        Австралийский мотивационный оратор, меценат, писатель и певец, рождённый с
                        редким наследственным заболеванием, приводящим к отсутствию всех четырёх конечностей.
                        «Моя миссия — помочь людям найти свой путь в жизни», — говорит он.
                    </p>
                </div>
            </section>
        );
    }
}

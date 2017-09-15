import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import Arrow from 'components/Assets/Icons/Arrow';
import Brightcove from '../../../Brightcove';
import Flag from 'components/Assets/Icons/Flag';
import SignsFlag from 'components/Assets/Icons/SignsFlag';
import Youtube from 'react-youtube';

import Palette from 'components/Assets/Palette';
import Styles from './Styles/main.scss';

export default class Common extends Component {
    static propTypes = {
        handleLanguageChange: PropTypes.func.isRequired,
        handleMenu: PropTypes.func.isRequired,
        isOpened: PropTypes.bool.isRequired,
        language: PropTypes.string.isRequired,
        streams: PropTypes.array.isRequired,
        playerType: PropTypes.string
    };

    static defaultProps = {
        playerType: 'youtube'
    };

    render() {
        const {
            handleLanguageChange,
            handleMenu,
            isOpened,
            language,
            streams,
            playerType
        } = this.props;

        const progressStyle = {
            width: '76%'
        };

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

        const languagesStyle = cx({
            [Styles.languages]: true,
            [Styles.opened]: isOpened
        });

        // bubble active language to the top
        const items = streams.sort((a, b) => {
            if (b.id === language) {
                return 1;
            }

            return 0;
        })
        // wrap languages into jsx
        .map((stream) => {
            let title = '';

            switch (stream.title) {
                case 'укр':
                    title = 'українська';
                    break;
                case 'рус':
                    title = 'русский';
                    break;
                default:
                    ({ title } = stream);
            }

            return (
                <div
                    className={ Styles.item }
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
                    <span className={ Styles.language }>
                        { title }
                    </span>
                </div>
            );
        });

        return (
            <section className={ Styles.mainComponent }>
                <div className={ Styles.wrapVideo }>
                    <div className={ Styles.video }>
                        { player }
                    </div>
                </div>
                <div className={ languagesStyle }>
                    <ul className={ Styles.list }>
                        { items }
                    </ul>
                    <div className={ Styles.arrowButton } onClick={ handleMenu }>
                        <Arrow color={ Palette.mainColor1 } className={ Styles.arrow }/>
                    </div>
                </div>
                <div className={ Styles.info }>
                    <h1 className={ Styles.title }>Ник Вуйчич: День благодаренья</h1>
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

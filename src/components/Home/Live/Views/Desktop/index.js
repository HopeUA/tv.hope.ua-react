import React, { Component, PropTypes } from 'react';
import Moment from 'moment';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import Palette from 'components/Assets/Palette';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import Arrow from 'components/Assets/Icons/Arrow';
import PlayPause from 'components/Assets/Icons/PlayPause';
import Volume from 'components/Assets/Icons/Volume';
import FullScreen from 'components/Assets/Icons/FullScreen';

export default class Desktop extends Component {
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        currentTime: PropTypes.string.isRequired,
        items: PropTypes.array,
        isMuted: PropTypes.bool
    };
    static defaultProps = {
        items: [],
        isMuted: false
    };

    videoContainer = null;

    componentDidMount = () => {
        // TODO Вставить flowplayer
        // flowplayer(this.videoContainer, {
        //     live: true,
        //     autoplay: true,
        //     clip: {
        //         sources: [
        //             {
        //                 type: 'application/x-mpegurl',
        //                 src: 'https://live-tv.hope.ua/nadia-publish/smil:nadia.smil/playlist.m3u8'
        //             }
        //         ]
        //     }
        // });
    };

    render() {
        const { mediaType, currentTime, items, isMuted } = this.props;

        const [current, next, third] = items;

        // TODO Добавить обработку клика на кнопки
        const test = true;

        const currentDescription = current.episode.description === '' ?
            current.show.description : current.episode.description;
        const nextDescription = next.episode.description === '' ? next.show.description : next.episode.description;
        const nextImage = next.episode.image === '' ? next.show.images.cover : next.episode.image;
        const episodeLink = current.episode.code === '' ? null : (
            <div className={ Styles.episodeLink }>
                <a href="#" className={ Styles.episode } >Перейти к выпуску</a>
                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
            </div>
        );

        const episodeProgress = (100 / (Moment(next.date).unix() - Moment(current.date).unix())
        * (Moment(currentTime).unix() - Moment(current.date).unix()));

        // Смещение currentTime
        let progress;

        const timeMinOffset = 22;
        const timeMaxOffset = 100 - timeMinOffset;

        if (episodeProgress <= timeMinOffset) {
            progress = 0;
        } else if (episodeProgress > timeMaxOffset) {
            progress = timeMaxOffset - timeMinOffset;
        } else {
            progress = episodeProgress - timeMinOffset;
        }

        const timeStyles = { transform: `translateX(${progress}%)` };
        const timelineStyles = { width: `${episodeProgress}%` };
        const nextImageStyle = { backgroundImage: `url(${nextImage})` };

        const nextVideo = BreakPoints.tabletPortrait.name === mediaType ? (
            null
        ) : (<section className={ Styles.nextContainer }>
            <h1>Дальше в эфире</h1>
            <div className={ Styles.nextVideo }>
                <div className={ Styles.image } style={ nextImageStyle }/>
                <div className={ Styles.info }>
                    <div className={ Styles.bar }>
                        <span className={ Styles.startTime }>{ Moment(next.date).format('LT') }</span>
                        <span className={ Styles.timeLine }/>
                        <span className={ Styles.endTime }>{ Moment(third.date).format('LT') }</span>
                    </div>
                    <h2>{ next.show.title }</h2>
                    <div className={ Styles.link }>
                        <a href="#">{ next.episode.title }</a>
                        <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                    </div>
                    <span className={ Styles.description }>{ nextDescription }</span>
                </div>
            </div>
        </section>);

        return (
            <section className={ Grids.container }>
                <section className={ Styles.liveComponent }>
                    <section className={ Styles.liveContainer }>
                        <h1 className={ Styles.label }>в эфире</h1>
                        <div className={ Styles.live }>
                            <div className={ Styles.videoContainer }>
                                <div
                                    className={ Styles.video }
                                    style={ nextImageStyle } ref={ (ref) => { this.videoContainer = ref; } }
                                />
                                <div className={ Styles.iconsBlock }>
                                    <div className={ Styles.icons }>
                                        <Volume color={ Palette.paletteColor6 } isMuted={ isMuted }/>
                                        <PlayPause color={ Palette.paletteColor6 } isPlaying={ test }/>
                                        <FullScreen color={ Palette.paletteColor6 }/>
                                    </div>
                                </div>
                            </div>
                            <div className={ Styles.info }>
                                <div className={ Styles.bar }>
                                    <span className={ Styles.startTime }>{ Moment(current.date).format('LT') }</span>
                                    <div className={ Styles.timeLineContainer }>
                                        <div className={ Styles.currentTime } style={ timeStyles }>
                                            <span>{ Moment(currentTime).format('LT') }</span>
                                        </div>
                                        <div className={ Styles.scale }>
                                            <div className={ Styles.progress } style={ timelineStyles }>
                                                <span/>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={ Styles.endTime }>{ Moment(next.date).format('LT') }</span>
                                </div>
                                <h1>{ current.episode.title }</h1>
                                <div className={ Styles.showLink }>
                                    <a href="#" className={ Styles.show }>{ current.show.title }</a>
                                    <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                                </div>
                                <p>{ currentDescription }</p>
                                { episodeLink }
                            </div>
                        </div>
                    </section>
                    { nextVideo }
                </section>
            </section>
        );
    }
}

import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import Palette from 'components/Assets/Palette';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import Arrow from 'components/Assets/Icons/Arrow';
import PlayPause from 'components/Assets/Icons/PlayPause';
import Volume from 'components/Assets/Icons/Volume';
import FullScreen from 'components/Assets/Icons/FullScreen';

export default function Desktop(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const style = {
        backgroundImage: 'url(https://tv.hope.ua/wp-content/uploads/2016/02/green-landscape-wallpaper.jpg)'
    };

    const style2 = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/JMLU/JMLU-cover.jpg)'
    };

    const test = true;

    const nextVidio = BreakPoints.tabletPortrait.name === props.mediaType ? (
        null
    ) : (<section className={ Styles.nextContainer }>
        <h1>Дальше в эфире</h1>
        <div className={ Styles.nextVideo }>
            <div className={ Styles.image } style={ style2 }></div>
            <div className={ Styles.info }>
                <div className={ Styles.bar }>
                    <span className={ Styles.startTime }>15:35</span>
                    <span className={ Styles.timeLine }> </span>
                    <span className={ Styles.endTime }>15:55</span>
                </div>
                <h2>Ох уже ці італійці</h2>
                <div className={ Styles.link }>
                    <a href="#">В гостях у Добрячка</a>
                    <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                </div>
                <span className={ Styles.description }>Повтор программы</span>
            </div>
        </div>
    </section>);

    return (
        <PixelPerfect templates={ templates } component="Live" opacity="40">
            <section className={ Grids.container }>
                <section className={ Styles.liveComponent }>
                    <section className={ Styles.liveContainer }>
                        <h1 className={ Styles.label }>в эфире</h1>
                        <div className={ Styles.live }>
                            <div className={ Styles.videoContainer }>
                                <div className={ Styles.video } style={ style }></div>
                                <div className={ Styles.iconsBlock }>
                                    <div className={ Styles.icons }>
                                        <Volume color={ Palette.paletteColor6 } isMuted={ test }/>
                                        <PlayPause color={ Palette.paletteColor6 } isPlaying={ test }/>
                                        <FullScreen color={ Palette.paletteColor6 }/>
                                    </div>
                                </div>
                            </div>
                            <div className={ Styles.info }>
                                <div className={ Styles.bar }>
                                    <span className={ Styles.startTime }>12:40</span>
                                    <div className={ Styles.timeLineContainer }>
                                        <div className={ Styles.currentTime }>
                                            <span>12:50</span>
                                        </div>
                                        <div className={ Styles.scale }>
                                            <div className={ Styles.progress }>
                                                <span/>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={ Styles.endTime }>13:30</span>
                                </div>
                                <h1>Ох уже ці італійці</h1>
                                <div className={ Styles.showLink }>
                                    <a href="#" className={ Styles.show }>В гостях у Добрячка</a>
                                    <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                                </div>
                                <p>Про італійців та їх культуру розповість дітлахам Добрячок.</p>
                                <div className={ Styles.episodeLink }>
                                    <a href="#" className={ Styles.episode }>Перейти к выпуску</a>
                                    <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                                </div>
                            </div>
                        </div>
                    </section>
                    { nextVidio }
                </section>
            </section>
        </PixelPerfect>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired
};

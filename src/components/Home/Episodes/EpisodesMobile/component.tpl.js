import React from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import SwipeableViews from 'vendor/Swipeable';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow'
import Palette from 'components/Assets/Palette';

// убрал имя функции Banner
export default function EpisodesMobile(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/CLMU/episodes/09615/CLMU09615-cover.jpg)'
    };

    const swipeParams = {
        containerWidth: 81.25,
        containerMargin: 4,
        resistance: true
    };

    return (
        <PixelPerfect templates={ templates } component="Episodes" opacity="40">
            <section className={ Styles.episodesComponent }>
                <h1 className={ Styles.title }>Новые выпуски</h1>
                <div className={ Styles.cover }>
                    {
                    BreakPoints.phoneLandscape.name === props.mediaType ?
                        (<SwipeableViews { ...swipeParams }>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={Styles.bubble}/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={Styles.bubble}/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={Styles.bubble}/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={Styles.bubble}/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                        </SwipeableViews>)
                        :(<article className={ Styles.episodeItem }>
                            <div className={ Styles.image } style={ styles }></div>
                            <div className={ Styles.info }>
                                <div className={ Styles.blockDate }>
                                    <BubbleVideo color={ Palette.paletteColor2 } className={Styles.bubble}/>
                                    <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                </div>
                                <h1>Вчимо дітей розпоряджатися грішми</h1>
                                <div className={ Styles.link }>
                                    <a href="#">Ранок Надії</a>
                                    <Arrow color={ Palette.paletteColor3 }/>
                                </div>
                            </div>
                        </article>
                        )

                    }
                </div>
            </section>
        </PixelPerfect>
    );
}

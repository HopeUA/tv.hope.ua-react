import React, { PropTypes } from 'react';
import SwipeableViews from 'vendor/Swipeable';

import Styles from '../main.scss';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';
import Palette from 'components/Assets/Palette';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';

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
                    BreakPoints.phonePortrait.name === props.mediaType ?
                        (<SwipeableViews { ...swipeParams }>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                            <article className={ Styles.episodeItem }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                        </SwipeableViews>) : [
                            <article className={ Styles.episodeItem } key={ 1 }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>18 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>,
                            <article className={ Styles.episodeItem } key={ 2 }>
                                <div className={ Styles.image } style={ styles }></div>
                                <div className={ Styles.info }>
                                    <div className={ Styles.blockDate }>
                                        <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                        <p className={ Styles.date }><strong>19 августа,</strong>&nbsp;2016</p>
                                    </div>
                                    <h1>Вчимо дітей розпоряджатися грішми</h1>
                                    <div className={ Styles.link }>
                                        <a href="#">Ранок Надії</a>
                                        <Arrow className={ Styles.arrow } color={ Palette.paletteColor3 }/>
                                    </div>
                                </div>
                            </article>
                        ]
                    }
                </div>
            </section>
        </PixelPerfect>
    );
}

EpisodesMobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

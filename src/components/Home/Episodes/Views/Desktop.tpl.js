import React from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from '../main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';

export default function EpisodesDesktop() {
    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/CLMU/episodes/09615/CLMU09615-cover.jpg)'
    };

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    return (
        <PixelPerfect templates={ templates } component="Episodes" opacity="40">
            <section className={ Grids.container }>
                <section className={ Styles.episodesComponent }>
                    <div className={ Styles.header }>
                        <h1>Новые выпуски</h1>
                    </div>
                    <Slider { ...properties }>
                        <div className={ Styles.large } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                            <h3>Хвороба століття</h3>
                            <h4>Настав час</h4>
                        </div>
                        <div className={ Styles.row }>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                            <div className={ Styles.small } style={ styles }>
                                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                                <h3>Для найменших — найменше?</h3>
                            </div>
                        </div>
                    </Slider>
                </section>
            </section>
        </PixelPerfect>
    );
}


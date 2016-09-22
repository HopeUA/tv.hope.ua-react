import React from 'react';
import Styles from './main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Grids from 'theme/Grid.scss';

// убрал имя функции Banner
export default function EpisodesDesktop() {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/CLMU/episodes/09615/CLMU09615-cover.jpg)'
    };

    return (
        <PixelPerfect templates={ templates } component="Episodes" opacity="40">
            <section className={ Grids.container }>
                <section className={ Styles.episodesComponent }>
                    <div className={ Styles.header }>
                        <h1>Новые выпуски</h1>
                    </div>
                    <div className={ Styles.wrap }>
                        <div className={ Styles.arrowLeft }></div>
                        <div className={ Styles.list }>
                            <div className={ Styles.large } style={ styles }>
                                <h3>Хвороба століття</h3>
                                <h4>Настав час</h4>
                            </div>
                            <div className={ Styles.row }>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                                <div className={ Styles.small } style={ styles }>
                                    <h3>Для найменших — найменше?</h3>
                                </div>
                            </div>
                        </div>
                        <div className={ Styles.arrowRight }></div>
                    </div>
                </section>
            </section>
        </PixelPerfect>
    );
}

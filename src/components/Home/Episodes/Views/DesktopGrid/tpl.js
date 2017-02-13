import React, { PropTypes } from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';
import Refresh from 'components/Assets/Icons/Reload';

export default function DesktopGrid(props) {
    const { canRefresh, scrollDisable } = props;

    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/CLMU/episodes/09615/CLMU09615-cover.jpg)'
    };

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const refreshStyle = {
        display: canRefresh ? 'flex' : 'none'
    };

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Новые выпуски</h1>
                    <div className={ Styles.refresh } style={ refreshStyle }>
                        Обновить
                        <Refresh color={ Palette.tempColor3 }/>
                    </div>
                </div>
                <Slider { ...properties } disabled={ scrollDisable }>
                    <div className={ Styles.large } style={ styles }>
                        <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                        <h3>Хвороба століття</h3>
                        <h4>Настав час</h4>
                    </div>
                    <div className={ Styles.row }>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                        <div className={ Styles.small } style={ styles }>
                            <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                            <h3>Для найменших — найменше?</h3>
                        </div>
                    </div>
                </Slider>
            </section>
        </section>
    );
}

DesktopGrid.propTypes = {
    canRefresh: PropTypes.bool,
    scrollDisable: PropTypes.bool
};

DesktopGrid.defaultProps = {
    canRefresh: false,
    scrollDisable: false
};

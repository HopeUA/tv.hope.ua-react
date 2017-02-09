import React, { PropTypes } from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';

export default function DesktopGrid(props) {
    const { items } = props;

    if (items.length === 0) {
        return null;
    }

    const [large] = items;
    const styles = {
        backgroundImage: `url(${large.image})`
    };

    const episodes = items.slice(1).map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        return (
            <div className={ Styles.small } style={ background } key={ el.uid }>
                <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                <h3>{ el.title }</h3>
            </div>
        );
    });

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Новые выпуски</h1>
                </div>
                <Slider { ...properties }>
                    <div className={ Styles.large } style={ styles }>
                        <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                        <h3>{ large.title }</h3>
                        <h4>{ large.show.title }</h4>
                    </div>
                    <div className={ Styles.row }>
                        { episodes }
                    </div>
                </Slider>
            </section>
        </section>
    );
}

DesktopGrid.propTypes = {
    items: PropTypes.array
};
DesktopGrid.defaultProps = {
    items: []
};

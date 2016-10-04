import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import Slider from 'vendor/Slider/SliderComponent';

// убрал имя функции Banner
export default function EpisodesDesktop(props) {
    const { items } = props;
    const large = items.splice(0, 1);
    const styles = {
        backgroundImage: `url(${large[0].image})`
    };
    items.shift();

    EpisodesDesktop.propTypes = {
        items: PropTypes.array
    };

    const episodes = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        return (<div className={ Styles.small } style={ background } key={ el.uid }>
            <h3>{ el.title }</h3>
        </div>);
    });

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap
    };

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Новые выпуски</h1>
                </div>
                <Slider { ...properties }>
                    <div className={ Styles.large } style={ styles }>
                        <h3>{ large[0].title }</h3>
                        <h4>{ large[0].show.title }</h4>
                    </div>
                    <div className={ Styles.row }>
                        { episodes }
                    </div>
                </Slider>
            </section>
        </section>
    );
}

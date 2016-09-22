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

    console.log(items);

    const episodes = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        return (<div className={ Styles.small } style={ background } key={ el.uid }>
            <h3>{ el.title }</h3>
        </div>);
    });

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Новые выпуски</h1>
                </div>
                <Slider>
                    <div className={ Styles.wrap }>
                        <div className={ Styles.arrowLeft }></div>
                        <div className={ Styles.list }>
                            <div className={ Styles.large } style={ styles }>
                                <h3>{ large[0].title }</h3>
                                <h4>{ large[0].show.title }</h4>
                            </div>
                            <div className={ Styles.row }>
                                { episodes }
                            </div>
                        </div>
                        <div className={ Styles.arrowRight }></div>
                    </div>
                </Slider>
            </section>
        </section>
    );
}


// <Slider>
//     <div className={ Styles.large } style={ styles }>
//         <h3>{ large[0].title }</h3>
//         <h4>{ large[0].show.title }</h4>
//     </div>
//     <div className={ Styles.row }>
//         { episodes }
//     </div>
// </Slider>

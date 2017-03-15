import React, { PropTypes } from 'react';
import Moment from 'moment';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';

Moment.locale('ru');

export default function Desktop(props) {
    const { items, title } = props;

    const articles = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        const date = Moment(el.date);

        return (
            <article className={ Styles.item } key={ el.code }>
                <div className={ Styles.image } style={ background }/>
                <div className={ Styles.info }>
                    <div className={ Styles.date }>
                        <BubbleArticle color={ Palette.mainColor3 }/>
                        <p>
                            <strong>{ `${date.format('D')} ${date.format('MMMM')},` }</strong>
                            &nbsp;{ `${date.format('LT')}` }
                        </p>
                    </div>
                    <a href="#">
                        <h1>{ el.title }</h1>
                    </a>
                    <p className={ Styles.description }>{ el.description.short }</p>
                </div>
            </article>
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
            <section className={ Styles.articlesComponent }>
                <h1 className={ Styles.title }>{ title }</h1>
                <Slider { ...properties }>
                    { articles }
                </Slider>
            </section>
        </section>
    );
}

Desktop.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string.isRequired
};
Desktop.defaultProps = {
    items: []
};

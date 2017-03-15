/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import Slider from 'vendor/Slider/SliderComponent';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

function Desktop(props) {
    const { items, title } = props;

    const articles = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.images.cover})`
        };

        return (
            <article className={ Styles.item } key={ el.uid } style={ background }>
                <a href="#">{ el.title }</a>
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
            <section className={ Styles.showsComponent }>
                <h1 className={ Styles.title }>{ title }</h1>
                <Slider { ...properties }>
                    <div className={ Styles.row }>
                        { articles }
                    </div>
                </Slider>
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Desktop.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string.isRequired
};

/**
 * [CDP]
 * Component default props
 */
Desktop.defaultProps = {
    items: []
};

/**
 * [IE]
 * Export
 */
export default Desktop;

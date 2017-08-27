import React, { PropTypes } from 'react';
import cx from 'classnames';
import Moment from 'moment';

import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

// import BreakPoints from 'vendor/PixelPerfect/breakpoints';
// import Palette from 'components/Assets/Palette';

Moment.locale('ru');

export default function Common(props) {
    const { items, findIndex, indexActive } = props;

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const days = items.map((e, i) => {
        const dayClasses = cx({
            [Styles.day]: true,
            [Styles.active]: i === indexActive,
            [Styles.today]: e.today
        });

        return (
            <div key={ e.date } className={ dayClasses } onClick={ findIndex(i) }>
                <span className={ Styles.dayOfWeek }>{ e.dayOfWeek }</span>
                <span className={ Styles.date }>{ e.date }</span>
            </div>
        );
    });

    return (
        <section className={ Styles.daysComponent }>
            <div className={ Grid.container } >
                <Slider { ...properties }>
                    { days }
                </Slider>
            </div>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired,
    findIndex: PropTypes.func.isRequired,
    indexActive: PropTypes.number.isRequired
};

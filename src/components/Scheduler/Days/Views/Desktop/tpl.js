import React, { PropTypes } from 'react';
import cx from 'classnames';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';

export default function Common() {
    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const dayClasses = cx({
        [Styles.active]: true,
        [Styles.day]: true
    });

    const dateClasses = cx({
        [Styles.date]: true,
        [Styles.toDay]: true
    });

    return (
        <section className={ Styles.daysComponent }>
            <Slider { ...properties }>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПН</span>
                    <span className={ Styles.date }>17.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВТ</span>
                    <span className={ Styles.date }>18.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СР</span>
                    <span className={ Styles.date }>вчера</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ЧТ</span>
                    <span className={ Styles.date }>сегодня</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПТ</span>
                    <span className={ Styles.date }>завтра</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СБ</span>
                    <span className={ Styles.date }>22.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВС</span>
                    <span className={ Styles.date }>23.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПН</span>
                    <span className={ Styles.date }>17.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВТ</span>
                    <span className={ Styles.date }>18.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СР</span>
                    <span className={ Styles.date }>вчера</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ЧТ</span>
                    <span className={ Styles.date }>сегодня</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПТ</span>
                    <span className={ Styles.date }>завтра</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СБ</span>
                    <span className={ Styles.date }>22.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВС</span>
                    <span className={ Styles.date }>23.06</span>
                </div>
                <div className={ dayClasses }>
                    <span className={ Styles.dayOfWeek }>ПН</span>
                    <span className={ Styles.date }>17.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВТ</span>
                    <span className={ Styles.date }>18.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СР</span>
                    <span className={ Styles.date }>вчера</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ЧТ</span>
                    <span className={ dateClasses }>сегодня</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПТ</span>
                    <span className={ Styles.date }>завтра</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СБ</span>
                    <span className={ Styles.date }>22.06</span>
                </div>
                <div className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВС</span>
                    <span className={ Styles.date }>23.06</span>
                </div>
            </Slider>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

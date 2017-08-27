import React from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';

export default function Common() {
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
            <ul className={ Styles.days }>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПН</span>
                    <span className={ Styles.date }>17.06</span>
                </li>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВТ</span>
                    <span className={ Styles.date }>18.06</span>
                </li>
                <li className={ dayClasses }>
                    <span className={ Styles.dayOfWeek }>СР</span>
                    <span className={ Styles.date }>вчера</span>
                </li>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ЧТ</span>
                    <span className={ dateClasses }>сегодня</span>
                </li>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ПТ</span>
                    <span className={ Styles.date }>завтра</span>
                </li>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>СБ</span>
                    <span className={ Styles.date }>22.06</span>
                </li>
                <li className={ Styles.day }>
                    <span className={ Styles.dayOfWeek }>ВС</span>
                    <span className={ Styles.date }>23.06</span>
                </li>
            </ul>
        </section>
    );
}

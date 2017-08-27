import React, { PropTypes } from 'react';
import cx from 'classnames';
// import px from 'lib/px';
import Moment from 'moment';

import Styles from './Styles/main.scss';

// import BP from 'lib/breakpoints';
// import Palette from 'components/Assets/Palette';

Moment.locale('ru');

export default function Common(props) {
    const { items, findIndex, indexActive } = props;

    const days = items.map((e, i) => {
        const dayClasses = cx({
            [Styles.day]: true,
            [Styles.active]: i === indexActive,
            [Styles.today]: e.today
        });

        return (
            <li key={ e.date } className={ dayClasses } onClick={ findIndex(i) }>
                <span className={ Styles.dayOfWeek }>{ e.dayOfWeek }</span>
                <span className={ Styles.date }>{ e.date }</span>
            </li>
        );
    });

    return (
        <section className={ Styles.daysComponent }>
            <div className={ Styles.wrap }>
                <ul className={ Styles.days }>
                    { days }
                </ul>
            </div>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired,
    findIndex: PropTypes.func.isRequired,
    indexActive: PropTypes.number.isRequired
};

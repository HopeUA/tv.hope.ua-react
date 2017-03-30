/**
 * [IL]
 * Library Import
 */
import React from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

function Buttons() {
    return (
        <section className={ Styles.buttonsComponent }>
            <a href="#">Контакти ТК «Надія»</a>
            <a href="#">Де нас дивитись?</a>
            <a href="#">Дивитися прямий ефір</a>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Buttons;

import React from 'react';

import Styles from './Styles/main.scss';

export default function Common() {
    return (
        <section className={ Styles.titleComponent }>
            <h1 className={ Styles.title }>ТВ Онлайн</h1>
        </section>
    );
}

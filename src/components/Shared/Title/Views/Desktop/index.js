import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

export default function Common() {
    return (
        <section className={ Styles.titleComponent }>
            <div className={ Grid.container }>
                <h1 className={ Styles.title }>ТВ Онлайн</h1>
            </div>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

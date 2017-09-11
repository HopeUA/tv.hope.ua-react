import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

export default function Desktop(props) {
    const { title } = props;

    return (
        <section className={ Styles.titleComponent }>
            <div className={ Grid.container }>
                <h1 className={ Styles.title }>{ title }</h1>
            </div>
        </section>
    );
}

Desktop.propTypes = {
    title: PropTypes.string.isRequired
};

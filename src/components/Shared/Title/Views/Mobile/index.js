import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';

export default function Mobile(props) {
    const { title } = props;

    return (
        <section className={ Styles.titleComponent }>
            <h1 className={ Styles.title }>{ title }</h1>
        </section>
    );
}

Mobile.propTypes = {
    title: PropTypes.string.isRequired
};

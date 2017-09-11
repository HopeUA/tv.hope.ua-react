import React, { PropTypes } from 'react';
import { Ru, Uk } from './Locales';

export default function Common(props) {
    const { locale } = props;

    let view;
    if (locale === 'uk') {
        view = <Uk/>;
    } else {
        view = <Ru/>;
    }

    return view;
}

Common.propTypes = {
    locale: PropTypes.string.isRequired
};

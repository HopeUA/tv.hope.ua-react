import React, { PropTypes } from 'react';
import * as Locales from './Locales';

export default function Common(props) {
    const { locale } = props;

    let view;
    if (locale === 'uk') {
        view = <Locales.Uk/>;
    } else {
        view = <Locales.Ru/>;
    }

    return view;
}

Common.propTypes = {
    locale: PropTypes.string.isRequired
};

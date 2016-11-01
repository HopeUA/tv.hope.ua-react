import React, { PropTypes } from 'react';
import Small from './Views/Small';
import Large from './Views/Large';

import Styles from './main.scss';
import Grids from 'theme/Grid.scss';

import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Top(props) {
    const isSmallVisible = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(props.mediaType) === -1;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.topComponent }>
                <Large mediaType={ props.mediaType } item={ props.items[0] }/>
                { isSmallVisible ? <Small item={ props.items[1] }/> : null }
            </section>
        </section>
    );
}

Top.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.object
};

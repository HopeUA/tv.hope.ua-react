import React, { PropTypes } from 'react';
import Small from './Views/Small.tpl';
import Large from './Views/Large.tpl';

import Styles from './main.scss';
import Grids from 'theme/Grid.scss';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

export default function Top(props) {
    const isSmallVisible = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(props.mediaType) === -1;

    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="Top" opacity="40">
            <section className={ Grids.container }>
                <section className={ Styles.topComponent }>
                    <Large mediaType={ props.mediaType }/>
                    { isSmallVisible ? <Small/> : null }
                </section>
            </section>
        </PixelPerfect>
    );
}

Top.propTypes = {
    mediaType: PropTypes.string.isRequired
};

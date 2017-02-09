import React from 'react';

import Styles from './Styles/main.scss';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import PlaySmall from 'components/Assets/Icons/PlaySmall';
import Palette from 'components/Assets/Palette';

export default function Mobile() {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="Live" opacity="40">
            <section className={ Styles.liveComponent }>
                <a href="#">
                    <PlaySmall color={ Palette.mainColor1 } className={ Styles.play }/>
                    Смотреть ТВ «Надія» Онлайн
                </a>
            </section>
        </PixelPerfect>
    );
}

import React, { PropTypes } from 'react';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

import Palette from 'components/Assets/Palette';
import Android from 'components/Assets/Icons/Android';
import Apple from 'components/Assets/Icons/Apple';
import Donate from 'components/Assets/Icons/Donate';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

export default function Banners(props) {
    const {
        mediaType
    } = props;

    const androidBg = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/assets/banners/android.jpg)'
    };

    const appleBg = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/assets/banners/apple.jpg)'
    };

    const donateBg = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/assets/banners/donate.jpg)'
    };

    const volonteersBg = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/assets/banners/volonteers.jpg)'
    };

    const isSwipeable = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(mediaType) !== -1;

    const containerSizes = {
        [BreakPoints.phonePortrait.name]: {
            width: 80,
            margin: 1
        },
        [BreakPoints.phoneLandscape.name]: {
            width: 45,
            margin: 0.8
        },
        [BreakPoints.tabletPortrait.name]: {
            width: 36,
            margin: 0.4
        }
    };
    const currentSizes = containerSizes[mediaType] || { width: 24.7,
                                                        margin: 0.4 }
    ;

    const swipeParams = {
        containerWidth: currentSizes.width,
        containerMargin: currentSizes.margin,
        resistance: true,
        initialAlign: 'left',
        disabled: !isSwipeable
    };

    return (
        <section className={ Styles.bannersComponent }>
            <SwipeableViews { ...swipeParams }>
                <article className={ Styles.item } style={ androidBg }>
                    <a href="#" className={ Styles.info }>
                        <Android color={ Palette.paletteColor6 }/>
                        <div className={ Styles.text }>
                            <span className={ Styles.row1 }>Приложения</span>
                            <span className={ Styles.row2 }>для системы</span>
                            <span className={ Styles.row3 }>android</span>
                        </div>
                    </a>
                </article>
                <article className={ Styles.item } style={ appleBg }>
                    <a href="#" className={ Styles.info }>
                        <Apple color={ Palette.paletteColor6 }/>
                        <div className={ Styles.text }>
                            <span className={ Styles.row1 }>Приложения</span>
                            <span className={ Styles.row2 }>для системы</span>
                            <span className={ Styles.row3 }>ios</span>
                        </div>
                    </a>
                </article>
                <article className={ Styles.item } style={ donateBg }>
                    <a href="#" className={ Styles.info }>
                        <Donate color={ Palette.paletteColor6 }/>
                        <div className={ Styles.text }>
                            <span className={ Styles.row1 }>Поддержка</span>
                            <span className={ Styles.row2 }>через проект</span>
                            <span className={ Styles.row3 }>donate</span>
                        </div>
                    </a>
                </article>
                <article className={ Styles.item } style={ volonteersBg }>
                    <a href="#" className={ Styles.info }>
                        <Android color={ Palette.paletteColor6 }/>
                        <div className={ Styles.text }>
                            <span className={ Styles.row1 }>Я очень хочу</span>
                            <span className={ Styles.row2 }>помагать как</span>
                            <span className={ Styles.row3 }>волонтер</span>
                        </div>
                    </a>
                </article>
            </SwipeableViews>
        </section>
    );
}

Banners.propTypes = {
    mediaType: PropTypes.string.isRequired
};

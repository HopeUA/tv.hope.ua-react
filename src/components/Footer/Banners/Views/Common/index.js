import React, { PropTypes } from 'react';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

// import Palette from 'components/Assets/Palette';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import items from '../../Mock/data.json';
import InlineSvg from 'vendor/InlineSvg/component';

export default function Banners(props) {
    const {
        mediaType
    } = props;

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

    const articles = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        return (
            <article className={ Styles.item } style={ background } key={ el.text[2] }>
                <a href="#" className={ Styles.info }>
                    <InlineSvg content={ el.icon } className={ Styles.svg }/>
                    <div className={ Styles.text }>
                        <span className={ Styles.row1 }>{ el.text[0] }</span>
                        <span className={ Styles.row2 }>{ el.text[1] }</span>
                        <span className={ Styles.row3 }>{ el.text[2] }</span>
                    </div>
                </a>
            </article>
        );
    });

    return (
        <section className={ Styles.bannersComponent }>
            <SwipeableViews { ...swipeParams }>
                { articles }
            </SwipeableViews>
        </section>
    );
}

Banners.propTypes = {
    mediaType: PropTypes.string.isRequired
};

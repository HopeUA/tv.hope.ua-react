import React, { PropTypes } from 'react';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import InlineSvg from 'vendor/InlineSvg/component';

export default function Common(props) {
    const {
        mediaType,
        items
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
    const currentSizes = containerSizes[mediaType] || {
        width: 24.7,
        margin: 0.4
    };

    const swipeParams = {
        containerWidth: currentSizes.width,
        containerMargin: currentSizes.margin,
        resistance: true,
        initialAlign: 'left',
        disabled: !isSwipeable
    };

    const articles = items.map((item) => {
        const background = {
            backgroundImage: `url(${item.image})`
        };

        return (
            <article className={ Styles.item } style={ background } key={ item.id }>
                <a href={ item.url } className={ Styles.info }>
                    <InlineSvg content={ item.icon }/>
                    <div className={ Styles.text }>
                        <span className={ Styles.row1 }>{ item.text[0] }</span>
                        <span className={ Styles.row2 }>{ item.text[1] }</span>
                        <span className={ Styles.row3 }>{ item.text[2] }</span>
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

Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array
};

Common.defaultProps = {
    items: []
};

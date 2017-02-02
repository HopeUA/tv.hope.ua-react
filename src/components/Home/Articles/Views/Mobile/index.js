import React, { PropTypes } from 'react';
import Moment from 'moment';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';
import BreakPoints from 'helpers/breakpoints';

import Palette from 'components/Assets/Palette';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';

Moment.locale('ru');

export default function Mobile(props) {
    const { items, mediaType } = props;

    const articles = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        const date = Moment(el.date);

        return (
            <article className={ Styles.item } key={ el.code }>
                <div className={ Styles.image } style={ background }/>
                <div className={ Styles.info }>
                    <div className={ Styles.date }>
                        <BubbleArticle color={ Palette.paletteColor1 }/>
                        <p>
                            <strong>{ `${date.format('D')} ${date.format('MMMM')},` }</strong>
                            &nbsp;{ `${date.format('LT')}` }
                        </p>
                    </div>
                    <a href="#">
                        <h1>{ el.title }</h1>
                    </a>
                    <p className={ Styles.description }>{ el.description.short }</p>
                </div>
            </article>
        );
    });

    const swipeParams = {
        containerWidth: 81.25,
        containerMargin: 4,
        resistance: true
    };

    return (
        <section className={ Styles.articleComponent }>
            <h1 className={ Styles.title }>Анонсы</h1>
            {
                BreakPoints.phonePortrait.name === mediaType ? (
                    <SwipeableViews { ...swipeParams }>
                        { articles }
                    </SwipeableViews>
                ) : articles
            }
        </section>
    );
}

Mobile.propTypes = {
    items: PropTypes.array,
    mediaType: PropTypes.string.isRequired
};

Mobile.defaultProps = {
    items: []
};

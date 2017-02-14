import React, { PropTypes } from 'react';
import Moment from 'moment';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';
import BreakPoints from 'helpers/breakpoints';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';
import Palette from 'components/Assets/Palette';

Moment.locale('ru');

export default function Mobile(props) {
    const { items, mediaType } = props;
    const episodes = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };
        const moment = Moment(el.publish).format('LL');
        const publishDate = moment.split(' ');

        return (
            <article className={ Styles.episodeItem } key={ el.uid }>
                <div className={ Styles.image } style={ background }/>
                <div className={ Styles.info }>
                    <div className={ Styles.blockDate }>
                        <BubbleVideo color={ Palette.mainColor4 } className={ Styles.bubble }/>
                        <p className={ Styles.date }>
                            <strong>{ `${publishDate[0]} ${publishDate[1]},` }</strong>
                            &nbsp;{ `${publishDate[2]}` }
                        </p>
                    </div>
                    <h1>{ el.title }</h1>
                    <div className={ Styles.link }>
                        <a href="#">{ el.show.title }</a>
                        <Arrow color={ Palette.commonColor1 } className={ Styles.arrow }/>
                    </div>
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
        <section className={ Styles.episodesComponent }>
            <h1 className={ Styles.title }>Выпуски</h1>
            <div className={ Styles.cover }>
                {
                    BreakPoints.phonePortrait.name === mediaType ? (
                        <SwipeableViews { ...swipeParams }>
                            { episodes }
                        </SwipeableViews>
                    ) : episodes
                }
            </div>
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

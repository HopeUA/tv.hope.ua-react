import React, { PropTypes } from 'react';
import cx from 'classnames';
import SwipeableViews from 'vendor/Swipeable';
import Moment from 'moment';

import Styles from './Styles/main.scss';

import BP from 'lib/breakpoints';
import Palette from 'components/Assets/Palette';
import Play from 'components/Assets/Icons/Play';

Moment.locale('ru');

export default function Common(props) {
    const { mediaType, items, current } = props;

    const swipeParams = {
        containerWidth: BP.isPhonePortrait(mediaType) ? 45.65 : 25.72,
        containerMargin: 0,
        resistance: true
    };

    const swipeStyle = {
        transform: BP.isPhonePortrait(mediaType) ? 'translateX(-22.9%)' : 'translateX(-38.6%)',
        overflowX: 'visible'
    };

    const [currentEpisode] = items.filter((element) => {
        return element.uid === current;
    });

    const styles = {
        backgroundImage: `url(${currentEpisode.image})`
    };

    const episodeItems = items.map((element) => {
        const styles = {
            backgroundImage: `url(${element.image})`
        };

        const itemClasses = cx({
            [Styles.active]: element.uid === current,
            [Styles.item]: true
        });

        return (
            <div key={ element.uid } className={ itemClasses }>
                <div className={ Styles.image } style={ styles }>
                    <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                    <span className={ Styles.time }>30:00</span>
                </div>
                <p className={ Styles.description }>
                    { element.title }
                </p>
            </div>
        );
    });

    return (
        <section className={ Styles.episodeComponent }>
            <div className={ Styles.cover } style={ styles }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>{ currentEpisode.title }</h1>
                <span className={ Styles.date }>{ Moment(currentEpisode.publish).format('DD MMMM, YYYY') }</span>
                <p className={ Styles.description }>{ currentEpisode.description }</p>
            </div>
            <SwipeableViews style={ swipeStyle } className={ Styles.swipeable } { ...swipeParams }>
                { episodeItems }
            </SwipeableViews>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired
};

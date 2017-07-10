import React, { PropTypes } from 'react';
import cx from 'classnames';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

import BP from 'lib/breakpoints';
import Palette from 'components/Assets/Palette';
import Play from 'components/Assets/Icons/Play';

export default function Common(props) {
    const { mediaType } = props;

    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ALKU/episodes/02816/ALKU02816-cover.jpg)'
    };

    const swipeParams = {
        containerWidth: BP.isPhonePortrait(mediaType) ? 45.65 : 25.72,
        containerMargin: 0,
        resistance: true
    };

    const swipeStyle = {
        transform: BP.isPhonePortrait(mediaType) ? 'translateX(-22.9%)' : 'translateX(-38.6%)',
        overflowX: 'visible'
    };

    const itemClasses = cx({
        [Styles.active]: true,
        [Styles.item]: true
    });

    return (
        <section className={ Styles.episodeComponent }>
            <div className={ Styles.cover } style={ styles }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>Пізнавай Господа на дорогах</h1>
                <span className={ Styles.date }>15 ноября, 2017</span>
                <p className={ Styles.description }>
                    В этой потрясающей истории под названием «человечество» речь идет о Боге и Его отношениях с нами.
                    Перед нами стоит выбор: вверить себя Богу или убежать. Мы подошли к основному вопросу:
                    «Можно ли доверять Богу»?
                </p>
            </div>
            <SwipeableViews style={ swipeStyle } className={ Styles.swipeable } { ...swipeParams }>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
                <div className={ itemClasses }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Почему люди лучше запоминают
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Почему люди лучше запоминают
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Почему люди лучше запоминают
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Почему люди лучше запоминают
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Почему люди лучше запоминают
                    </p>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ styles }>
                        <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                        <span className={ Styles.time }>30:00</span>
                    </div>
                    <p className={ Styles.description }>
                        Ник Вуйчич: С Богом возможно все
                    </p>
                </div>
            </SwipeableViews>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

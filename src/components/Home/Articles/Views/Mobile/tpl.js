import React, { PropTypes } from 'react';
import SwipeableViews from 'vendor/Swipeable';

import Styles from './Styles/main.scss';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';
import Palette from 'components/Assets/Palette';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';

export default function Mobile(props) {
    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ALKU/episodes/02816/ALKU02816-cover.jpg)'
    };

    const swipeParams = {
        containerWidth: 81.25,
        containerMargin: 4.4,
        resistance: true
    };

    return (
        <section className={ Styles.articleComponent }>
            <h1 className={ Styles.title }>Анонсы</h1>
            {
                BreakPoints.phonePortrait.name === props.mediaType ?
                    (<SwipeableViews { ...swipeParams }>
                        <article>
                            <div className={ Styles.image } style={ styles }/>
                            <div className={ Styles.info }>
                                <div className={ Styles.date }>
                                    <BubbleArticle color={ Palette.mainColor3 }/>
                                    <p><strong>15 августа,</strong>&nbsp;14:32</p>
                                </div>
                                <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                                <p className={ Styles.description }>Когда тело женщины вытащили с воды, она не дышала
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className={ Styles.image } style={ styles }/>
                            <div className={ Styles.info }>
                                <div className={ Styles.date }>
                                    <BubbleArticle color={ Palette.mainColor3 }/>
                                    <p><strong>15 августа,</strong>&nbsp;14:32</p>
                                </div>
                                <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                                <p className={ Styles.description }>Когда тело женщины вытащили с воды, она не дышала
                                </p>
                            </div>
                        </article>
                        <article>
                            <div className={ Styles.image } style={ styles }/>
                            <div className={ Styles.info }>
                                <div className={ Styles.date }>
                                    <BubbleArticle color={ Palette.mainColor3 }/>
                                    <p><strong>15 августа,</strong>&nbsp;14:32</p>
                                </div>
                                <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                                <p className={ Styles.description }>Когда тело женщины вытащили с воды, она не дышала
                                </p>
                            </div>
                        </article>
                    </SwipeableViews>
                ) : [
                    <article key={ 1 }>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.mainColor3 }/>
                                <p><strong>15 августа,</strong>&nbsp;14:32</p>
                            </div>
                            <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                            <p className={ Styles.description }>Когда тело женщины вытащили с воды, она не дышала</p>
                        </div>
                    </article>,
                    <article key={ 2 }>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.mainColor3 }/>
                                <p><strong>15 августа,</strong>&nbsp;14:32</p>
                            </div>
                            <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                            <p className={ Styles.description }>Когда тело женщины вытащили с воды, она не дышала</p>
                        </div>
                    </article>
                ]
            }

        </section>
    );
}

Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired
};

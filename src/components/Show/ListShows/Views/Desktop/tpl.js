import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

export default function Common() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    };

    return (
        <section className={ Grid.container }>
            <div className={ Styles.programListComponent }>
                <div className={ Styles.categoryContainer }>
                    <h1 className={ Styles.mainTitle }>На каждый день</h1>
                    <div className={ Styles.list }>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Є проблема</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Модная книга</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>5 хвилин для вічності</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Спасенні</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Є проблема</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Модная книга</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>5 хвилин для вічності</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.item }>
                            <div className={ Styles.image } style={ imageStyle }/>
                            <div className={ Styles.info }>
                                <h3 className={ Styles.title }>Спасенні</h3>
                                <p className={ Styles.description }>
                                    Малюваки — дитяча пізнавальна програма,
                                    де слухають захопливі історії, вчаться малювати,
                                    а ще співають щоразу нову пісеньку — караоке.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

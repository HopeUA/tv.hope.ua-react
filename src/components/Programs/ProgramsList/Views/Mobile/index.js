import React from 'react';

import Styles from './Styles/main.scss';

export default function Common() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    };

    return (
        <section className={ Styles.programListComponent }>
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
            </div>
        </section>
    );
}

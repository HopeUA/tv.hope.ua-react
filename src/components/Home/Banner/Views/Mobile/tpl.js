import React from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

export default function Mobile() {
    const background = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    };

    let controlItems = [];

    for (let i = 0; i < 5; i++) {
        const className = cx({
            [Styles.activeItem]: i === 3,
            [Styles.item]: i !== 3
        });
        controlItems.push(
            <span key={ i } className={ className }/>
        );
    }

    return (
        <section className={ Styles.bannerComponent }>
            <a href="#" className={ Styles.image } style={ background }/>
            <div className={ Styles.controlPanel }>
                { controlItems }
            </div>
        </section>
    );
}

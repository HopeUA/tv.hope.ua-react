import React from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

export default function Mobile() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    };

    const dots = [];

    for (let i = 0; i < 5; i++) {
        const className = cx({
            [Styles.item]: true,
            [Styles.active]: i === 3
        });
        dots.push(
            <span key={ i } className={ className }/>
        );
    }

    return (
        <section className={ Styles.bannerComponent }>
            <a href="#" className={ Styles.image } style={ imageStyle }/>
            <div className={ Styles.dots }>
                { dots }
            </div>
        </section>
    );
}

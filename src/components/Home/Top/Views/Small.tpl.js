import React from 'react';

import Styles from '../main.scss';
import Palette from 'components/Assets/Palette';

import BubbleArticle from 'components/Assets/Icons/BubbleArticle';
import GoTo from 'components/Assets/Icons/GoTo';

export default function Small() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/FKLU/episodes/00815/FKLU00815-cover.jpg)'
    };

    return (
        <article className={ Styles.small }>
            <div className={ Styles.image } style={ imageStyle }>
                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
            </div>
            <div className={ Styles.container }>
                <div className={ Styles.blur } style={ imageStyle }></div>
                <div className={ Styles.info }>
                    <div className={ Styles.date }>
                        <BubbleArticle color={ Palette.paletteColor6 } className={ Styles.bubble }/>
                        <span><strong>15 августа,&nbsp;</strong>14:32</span>
                    </div>
                    <h1>«Помолитесь за меня»: Моментальный ответ</h1>
                    <p>Когда тело женщины вытащили с воды, она не</p>
                </div>
            </div>
        </article>
    );
}

import React from 'react';

import Styles from './Styles/main.scss';
import Palette from 'components/Assets/Palette';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';

export default function Large() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/FKLU/episodes/00815/FKLU00815-cover.jpg)'
    };

    return (
        <section className={ Styles.topComponent }>
            <section className={ Styles.item }>
                <h1>Актуальное видео</h1>
                <article className={ Styles.main }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.container }>
                        <div className={ Styles.blur } style={ imageStyle }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.mainColor1 } className={ Styles.bubble }/>
                                <span><strong>18 августа,&nbsp;</strong>2016</span>
                            </div>
                            <a className={ Styles.titleLink }>Видиме з невидимого</a>
                            <div className={ Styles.link }>
                                <a href="#">Філософський камінь</a>
                                <Arrow color={ Palette.mainColor1 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    );
}

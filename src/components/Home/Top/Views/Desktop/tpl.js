import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import Palette from 'components/Assets/Palette';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';
import Arrow from 'components/Assets/Icons/Arrow';
import GoTo from 'components/Assets/Icons/GoTo';

export default function Large(props) {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/FKLU/episodes/00815/FKLU00815-cover.jpg)'
    };

    const small = (
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

    const viewSmall = BreakPoints.tabletPortrait.name === props.mediaType ? null : small;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.topComponent }>
                <section className={ Styles.large }>
                    <h1>Актуально</h1>
                    <article className={ Styles.main }>
                        <div className={ Styles.image } style={ imageStyle }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.container }>
                            <div className={ Styles.blur } style={ imageStyle }></div>
                            <div className={ Styles.info }>
                                <div className={ Styles.date }>
                                    <BubbleVideo color={ Palette.paletteColor6 } className={ Styles.bubble }/>
                                    <span><strong>18 августа,&nbsp;</strong>2016</span>
                                </div>
                                <a className={ Styles.titleLink }>Видиме з невидимого</a>
                                <div className={ Styles.link }>
                                    <a href="#">Філософський камінь</a>
                                    <Arrow color={ Palette.paletteColor6 } className={ Styles.arrow }/>
                                </div>
                                <p>Чому багато науковців, спираючись на відкриття
                                    науки заговорили про науковий доказ того, що все створено Творцем?
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                { viewSmall }
            </section>
        </section>
    );
}

Large.propTypes = {
    mediaType: PropTypes.string.isRequired
};

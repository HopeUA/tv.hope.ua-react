import React from 'react';
import Slider from 'vendor/Slider/SliderComponent';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';

export default function Desktop() {
    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ALKU/episodes/02816/ALKU02816-cover.jpg)'
    };

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    return (
        <section className={ Grids.container }>
            <section className={ Styles.articlesComponent }>
                <h1 className={ Styles.title }>Анонсы</h1>
                <Slider { ...properties }>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.paletteColor1 }/>
                                <p><strong>20 августа,</strong>&nbsp;18:27</p>
                            </div>
                            <h1>«Знаешь ли ты»?</h1>
                            <p className={ Styles.description }>
                                Если вы знаете, что такое война, вы понимаете, что такое опасность и настоящий что
                                такое опасность и настоящий такое опасность и настоящий
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.paletteColor1 }/>
                                <p><strong>20 августа,</strong>&nbsp;18:27</p>
                            </div>
                            <h1>«Знаешь ли ты»?</h1>
                            <p className={ Styles.description }>
                                Если вы знаете, что такое война, вы понимаете, что такое опасность и настоящий
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.paletteColor1 }/>
                                <p><strong>20 августа,</strong>&nbsp;18:27</p>
                            </div>
                            <h1>«Знаешь ли ты»?</h1>
                            <p className={ Styles.description }>
                                Если вы знаете, что такое война, вы понимаете, что такое опасность и настоящий
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.paletteColor1 }/>
                                <p><strong>20 августа,</strong>&nbsp;18:27</p>
                            </div>
                            <h1>«Знаешь ли ты»?</h1>
                            <p className={ Styles.description }>
                                Если вы знаете, что такое война, вы понимаете, что такое опасность и настоящий
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className={ Styles.image } style={ styles }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleArticle color={ Palette.paletteColor1 }/>
                                <p><strong>20 августа,</strong>&nbsp;18:27</p>
                            </div>
                            <h1>«Знаешь ли ты»?</h1>
                            <p className={ Styles.description }>
                                Если вы знаете, что такое война, вы понимаете, что такое опасность и настоящий
                            </p>
                        </div>
                    </article>
                </Slider>
            </section>
        </section>
    );
}

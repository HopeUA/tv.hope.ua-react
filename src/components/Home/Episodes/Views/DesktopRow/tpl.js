import React from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';
import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';

export default function DesktopRow() {
    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/CLMU/episodes/09615/CLMU09615-cover.jpg)'
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
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Рекомендованные выпуски</h1>
                </div>
                <Slider { ...properties }>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                    <article className={ Styles.item }>
                        <div className={ Styles.image } style={ styles }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.paletteColor2 } className={ Styles.bubble }/>
                                <span><strong>20 августа,&nbsp;</strong>2016</span>
                            </div>
                            <h1><a href="#">«Помолитесь за меня»:</a></h1>
                            <div className={ Styles.show }>
                                <h2><a href="#">Філософський камінь</a></h2>
                                <Arrow color={ Palette.paletteColor3 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </article>
                </Slider>
            </section>
        </section>
    );
}

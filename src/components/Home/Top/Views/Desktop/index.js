import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import Palette from 'components/Assets/Palette';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';
import GoTo from 'components/Assets/Icons/GoTo';
import BubbleArticle from 'components/Assets/Icons/BubbleArticle';

Moment.locale('ru');

// TODO item может быть episode или article
export default function Desktop(props) {
    const { items } = props;
    const [itemLarge, itemSmall] = items;
    const date = Moment(itemLarge.publish);
    const dateNext = Moment(itemSmall.publish);

    const imageNext = {
        backgroundImage: `url(${itemSmall.image})`
    };

    const imageCurrent = {
        backgroundImage: `url(${itemLarge.image})`
    };

    const small = (
        <article className={ Styles.small }>
            <div className={ Styles.image } style={ imageNext }>
                <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
            </div>
            <div className={ Styles.container }>
                <div className={ Styles.blur } style={ imageNext }/>
                <div className={ Styles.info }>
                    <div className={ Styles.date }>
                        <BubbleArticle color={ Palette.paletteColor6 } className={ Styles.bubble }/>
                        <span>
                            <strong>
                                {
                                    `${dateNext.format('D')} ${dateNext.format('MMM')},`
                                }
                            </strong>
                            &nbsp;{ `${dateNext.format('YYYY')}` }
                        </span>
                    </div>
                    <h1>
                        <a href="#">{ itemSmall.title }</a>
                    </h1>
                    <p>{ itemSmall.description }</p>
                </div>
            </div>
        </article>
    );

    const viewSmall = BreakPoints.tabletPortrait.name === props.mediaType ? null : small;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.topComponent }>
                <section className={ Styles.item }>
                    <h1>Актуально</h1>
                    <article className={ Styles.main }>
                        <div className={ Styles.image } style={ imageCurrent }>
                            <GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>
                        </div>
                        <div className={ Styles.container }>
                            <div className={ Styles.blur } style={ imageCurrent }/>
                            <div className={ Styles.info }>
                                <div className={ Styles.date }>
                                    <BubbleVideo color={ Palette.paletteColor6 } className={ Styles.bubble }/>
                                    <span>
                                        <strong>
                                            { `${date.format('D')} ${date.format('MMM')},` }
                                        </strong>
                                        &nbsp;{ `${date.format('YYYY')}` }
                                    </span>
                                </div>
                                <a className={ Styles.titleLink }>{ itemLarge.title }</a>
                                <div className={ Styles.link }>
                                    <h1>
                                        <a href="#">{ itemLarge.show.title }</a>
                                    </h1>
                                    <Arrow color={ Palette.paletteColor6 } className={ Styles.arrow }/>
                                </div>
                                <p>{ itemLarge.description }</p>
                            </div>
                        </div>
                    </article>
                </section>
                { viewSmall }
            </section>
        </section>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array
};
Desktop.defaultProps = {
    items: []
};

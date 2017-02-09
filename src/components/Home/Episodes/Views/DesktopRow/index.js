import React, { PropTypes } from 'react';
import Moment from 'moment';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';
import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';

Moment.locale('ru');

export default function DesktopRow(props) {
    const { items } = props;

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const item = items.map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        const date = Moment(el.publish);

        return (
            <article key={ el.uid } className={ Styles.item }>
                <div className={ Styles.image } style={ background }>
                    <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                </div>
                <div className={ Styles.info }>
                    <div className={ Styles.date }>
                        <BubbleVideo color={ Palette.mainColor4 } className={ Styles.bubble }/>
                        <span>
                            <strong>
                                { `${date.format('D')} ${date.format('MMM')},` }
                            </strong>
                            &nbsp;{ `${date.format('YYYY')}` }
                        </span>
                    </div>
                    <h1><a href="#">{ el.title }</a></h1>
                    <div className={ Styles.show }>
                        <h2><a href="#">{ el.show.title }</a></h2>
                        <Arrow color={ Palette.commonColor1 } className={ Styles.arrow }/>
                    </div>
                </div>
            </article>
        );
    });

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>Рекомендованные выпуски</h1>
                </div>
                <Slider { ...properties }>
                    { item }
                </Slider>
            </section>
        </section>
    );
}

DesktopRow.propTypes = {
    items: PropTypes.array
};
DesktopRow.defaultProps = {
    items: []
};

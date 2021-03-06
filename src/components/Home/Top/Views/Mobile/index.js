import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from './Styles/main.scss';
import Palette from 'components/Assets/Palette';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';

Moment.locale('ru');

export default function Mobile(props) {
    const { items, t } = props;
    const [item] = items;
    const Date = Moment(item.publish);

    const imageStyle = {
        backgroundImage: `url(${item.image})`
    };

    return (
        <section className={ Styles.topComponent }>
            <section className={ Styles.item }>
                <h1>{ t('Home.Top.title') }</h1>
                <article className={ Styles.main }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.container }>
                        <div className={ Styles.blur } style={ imageStyle }/>
                        <div className={ Styles.info }>
                            <div className={ Styles.date }>
                                <BubbleVideo color={ Palette.mainColor1 } className={ Styles.bubble }/>
                                <span>
                                    <strong>
                                        { `${Date.format('D')} ${Date.format('MMM')},` }
                                    </strong>
                                    &nbsp;{ `${Date.format('YYYY')}` }
                                </span>
                            </div>
                            <a className={ Styles.titleLink }>{ item.title }</a>
                            <div className={ Styles.link }>
                                <h1>
                                    <a href="#">{ item.show.title }</a>
                                </h1>
                                <Arrow color={ Palette.mainColor1 } className={ Styles.arrow }/>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    );
}

Mobile.propTypes = {
    items: PropTypes.array,
    t: PropTypes.func.isRequired
};
Mobile.defaultProps = {
    items: []
};

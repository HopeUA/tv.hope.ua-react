import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from '../main.scss';
import Palette from 'components/Assets/Palette';

import BubbleArticle from 'components/Assets/Icons/BubbleArticle';
import GoTo from 'components/Assets/Icons/GoTo';

Moment.locale('ru');

export default function Small(props) {
    const { item } = props;

    const Date = Moment(item.publish);

    const imageStyle = {
        backgroundImage: `url(${item.image})`
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
                        <span>
                            <strong>
                                {
                                    `${Date.format('LL')
                                    .split(' ')[0]} ${Date.format('LL')
                                    .split(' ')[1]},`
                                }
                            </strong>
                            &nbsp;{ `${Date.format('LL')
                            .split(' ')[2]}` }
                        </span>
                    </div>
                    <h1>
                        <a href="#">{ item.title }</a>
                    </h1>
                    <p>{ item.description }</p>
                </div>
            </div>
        </article>
    );
}

Small.propTypes = {
    item: PropTypes.array
};

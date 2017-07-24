import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from './Styles/main.scss';

Moment.locale('ru');

export default function Common(props) {
    const { item } = props;

    const imageStyle = {
        backgroundImage: `url(${item.image})`
    };

    const paragraphs = item.description.full.split('\r\n');

    const paragraphBeforeImage = paragraphs.shift().replace(/<\/?[\w]+>/g, '');

    const paragraphsAfterImage = paragraphs.join('</p>');

    return (
        <section className={ Styles.singleComponent }>
            <h1 className={ Styles.title }>{ item.title }</h1>
            <span className={ Styles.date }>{ Moment(item.date).format('DD MMMM, YYYY') }</span>
            <div className={ Styles.textContainer }>
                <span className={ Styles.initialLetter }>{ paragraphBeforeImage.charAt(0)}</span>
                <p dangerouslySetInnerHTML={ { __html: paragraphBeforeImage.substring(1) } }/>
            </div>
            <div className={ Styles.image } style={ imageStyle }/>
            <div dangerouslySetInnerHTML={ { __html: paragraphsAfterImage } }/>
        </section>
    );
}

Common.propTypes = {
    item: PropTypes.object.isRequired
};

import React, { PropTypes } from 'react';
import moment from 'moment';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

export default function Common(props) {
    const { item } = props;

    const imageStyle = {
        backgroundImage: `url(${item.image})`
    };

    const paragraphs = item.description.full.split('\r\n');

    const paragraphBeforeImage = paragraphs.shift().replace(/<\/?[\w]+>/g, '');

    const paragraphsAfterImage = paragraphs.join('</p>');

    return (
        <section className={ Grid.container }>
            <div className={ Styles.singleComponent }>
                <h1 className={ Styles.title }>
                    { item.title }
                </h1>
                <span className={ Styles.date }>{ moment(item.date).format('D MMMM YYYY') }</span>
                <div className={ Styles.containerContent }>
                    <span className={ Styles.initialLetter }>{ paragraphBeforeImage.charAt(0)}</span>
                    <div className={ Styles.content }>
                        <p dangerouslySetInnerHTML={ { __html: paragraphBeforeImage.substring(1) } }/>
                        <div className={ Styles.image } style={ imageStyle }/>
                        <div dangerouslySetInnerHTML={ { __html: paragraphsAfterImage } }/>
                    </div>
                </div>
            </div>
        </section>
    );
}

Common.propTypes = {
    item: PropTypes.object.isRequired
};

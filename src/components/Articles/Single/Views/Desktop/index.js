import React, { PropTypes } from 'react';

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
                    Почему люди лучше запоминают информацию, когда видят её, а не когда слышат?
                </h1>
                <span className={ Styles.date }>15 ноября, 2017</span>
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

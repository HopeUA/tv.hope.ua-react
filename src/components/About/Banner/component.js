import React, { PropTypes } from 'react';
import Styles from './main.scss';

export default function Banner(props) {
    const { text } = props;

    $(document).ready(function () {
        $('.parallax').parallax();
    });

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <h1 dangerouslySetInnerHTML={ { __html: text } }/>
                    <div className={ Styles.poster }></div>
                </div>
            </div>

            <div className={ Styles.parallaxContainer }>
                <div className={ Styles.parallax }>
                    <img src="images/parallax1.jpg"/>
                </div>
            </div>
        </section>
    );
}

Banner.propTypes = {
    text: PropTypes.string
};

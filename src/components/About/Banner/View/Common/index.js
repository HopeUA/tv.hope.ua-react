import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';

function Common(props) {
    const { text } = props;

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <h1 dangerouslySetInnerHTML={ { __html: text } }/>
                    <div className={ Styles.poster }/>
                </div>
            </div>
        </section>
    );
}

Common.propTypes = {
    text: PropTypes.string
};

Common.defaultProps = {
    text: ''
};

export default Common;

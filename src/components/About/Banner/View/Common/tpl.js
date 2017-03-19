import React from 'react';
import Styles from './Styles/main.scss';

function Common() {
    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <h1>
                        Наша мета – створення <span>якісного</span>,
                        <span> морально-чистого</span>,
                        <span> актуального</span> медіапродукту
                    </h1>
                    <div className={ Styles.poster }/>
                </div>
            </div>
        </section>
    );
}

export default Common;

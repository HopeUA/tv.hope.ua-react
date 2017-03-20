/**
 * [IL]
 * Library Import
 */
import React from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

function Common() {
    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <p className={ Styles.text }>
                        Наша мета – створення <span>якісного</span>
                        ,
                        <span>морально-чистого</span>
                        ,
                        <span>актуального</span>
                        медіапродукту
                    </p>
                    <div className={ Styles.poster }/>
                </div>
            </div>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Common;

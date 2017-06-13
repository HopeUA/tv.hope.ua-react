/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType } = props;

    const description = BP.isMobile(mediaType) ? null : (
        <p className={ Styles.description }>
            Ісус дуже добре знає, як функціонує наш організм.Він завжди використовував якості Свого тіла дуже
            розсудливо і якнайкраще, чого навчав кожного з нас
        </p>
    );

    return (
        <section className={ Grid.container }>
            <section className={ Styles.listComponent }>
                <h1 className={ Styles.title }>Архив выпусков</h1>
                <div className={ Styles.list }>
                    <div className={ Styles.item }>
                        <div className={ Styles.image }>
                            <span className={ Styles.time }>30:00</span>
                        </div>
                        <div className={ Styles.info }>
                            <p className={ Styles.theme }>
                                Почему люди лучше запоминают информацию, когда видят её, а не когда слышат?
                            </p>
                            <span className={ Styles.date }>15 ноября, 2017</span>
                            { description }
                        </div>
                    </div>

                    <div className={ Styles.item }>
                        <div className={ Styles.image }>
                            <span className={ Styles.time }>30:00</span>
                        </div>
                        <div className={ Styles.info }>
                            <p className={ Styles.theme }>
                                Почему люди лучше запоминают информацию, когда видят её, а не когда слышат?
                            </p>
                            <span className={ Styles.date }>15 ноября, 2017</span>
                            { description }
                        </div>
                    </div>

                    <div className={ Styles.item }>
                        <div className={ Styles.image }>
                            <span className={ Styles.time }>30:00</span>
                        </div>
                        <div className={ Styles.info }>
                            <p className={ Styles.theme }>Ник Вуйчич: С Богом возможно все!</p>
                            <span className={ Styles.date }>15 ноября, 2017</span>
                            { description }
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

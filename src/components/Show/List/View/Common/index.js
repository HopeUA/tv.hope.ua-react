/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import Moment from 'moment';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

import BP from 'lib/breakpoints';

Moment.locale('ru');

function Common(props) {
    const { mediaType, episodes } = props;

    const items = episodes.map((element) => {
        const description = BP.isMobile(mediaType) ? null : (
            <p className={ Styles.description }>{ element.description }</p>
        );

        const imageStyle = {
            backgroundImage: `url('${element.image}')`
        };

        const date = Moment(element.publish).format('DD MMMM, YYYY');

        return (
            <div className={ Styles.item } key={ element.uid }>
                <div className={ Styles.image } style={ imageStyle }>
                    <span className={ Styles.time }>30:00</span>
                </div>
                <div className={ Styles.info }>
                    <p className={ Styles.theme }>
                        { element.title }
                    </p>
                    <span className={ Styles.date }>{ date }</span>
                    { description }
                </div>
            </div>
        );
    });

    return (
        <section className={ Grid.container }>
            <section className={ Styles.listComponent }>
                <h1 className={ Styles.title }>Архив выпусков</h1>
                <div className={ Styles.list }>
                    { items }
                </div>
            </section>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    episodes: PropTypes.array.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

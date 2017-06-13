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

function Common(props) {
    const { show } = props;

    const imageStyle = show.images.cover ? {
        backgroundImage: `url('${show.images.cover}')`
    } : null;

    const title = show.title ? show.title : null;

    const description = show.description.medium ? show.description.medium : null;

    return (
        <section className={ Grid.container }>
            <section className={ Styles.aboutComponent }>
                <h1 className={ Styles.title }>О программе</h1>
                <div className={ Styles.content }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.text }>
                        <h2 className={ Styles.showName }>{ title }</h2>
                        <p className={ Styles.description }>
                            { description }
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

Common.propTypes = {
    show: PropTypes.object.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

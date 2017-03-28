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

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function WorldNetwork(props) {
    const { mediaType, t } =  props;

    const text = BP.isMobile(mediaType) ? t('About.WorldNetwork.description.1') : t('About.WorldNetwork.description.2');

    return (
        <section className={ Styles.worldNetworkComponent }>
            <header>
                <h1>{ t('About.WorldNetwork.title') }</h1>
                <h2>Hope Channel</h2>
            </header>
            <p dangerouslySetInnerHTML={ { __html: text } }/>
            <div className={ Styles.map }/>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
WorldNetwork.propTypes = {
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default WorldNetwork;

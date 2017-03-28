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
    const { mediaType } =  props;

    const text = BP.isMobile(mediaType) ?
        'Український телеканал «Надія» — один із <b>43 каналів</b> всесвітньої мережі Hope&nbsp;Channel'
        : 'Український телеканал «Надія» — один із <b>43 каналів</b> всесвітньої мережі Hope Channel, яка здійснює '
        + 'мовлення в таких країнах як Англія, Німеччина, Норвегія, Іспанія, Китай, Бразилія, Португалія, США та інші';

    return (
        <section className={ Styles.worldNetworkComponent }>
            <header>
                <h1>Всесвітня мережа</h1>
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
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default WorldNetwork;

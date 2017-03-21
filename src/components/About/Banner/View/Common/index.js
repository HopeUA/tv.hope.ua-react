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

function Common(props) {
    const { text } = props;

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <p className={ Styles.text } dangerouslySetInnerHTML={ { __html: text } }/>
                    <div className={ Styles.poster }/>
                </div>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    text: PropTypes.string
};

/**
 * [CDP]
 * Component default props
 */
Common.defaultProps = {
    text: ''
};

/**
 * [IE]
 * Export
 */
export default Common;

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

function Buttons(props) {
    const { t } = props;

    return (
        <section className={ Styles.buttonsComponent }>
            <a href="#">{ t('About.Buttons.contacts') }</a>
            <a href="#">{ t('About.Buttons.where') }</a>
            <a href="#">{ t('About.Buttons.live') }</a>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Buttons.propTypes = {
    t: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default Buttons;

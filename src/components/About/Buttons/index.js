/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';

/**
 * [IV]
 * View Import
 */
import Common from './View/Common';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@translate(['common'])

class Buttons extends Component {

    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { t } = this.props;

        /**
         * [RV]
         * View
         */
        const view = (<Common t={ t }/>);

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default Buttons;

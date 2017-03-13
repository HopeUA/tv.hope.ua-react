/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Common from './View/Common/tpl';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect(({ browser }) => {
    return { browser };
})
class Info extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { browser } = this.props;

        /**
         * [RR]
         * Return Component
         */
        return (
            <Common mediaType={ browser.mediaType }/>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Info;

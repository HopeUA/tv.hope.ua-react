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
import Info from './View/Common/tpl';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect(({ browser }) => {
    return { browser };
})
class infoComponent extends Component {
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
            <Info mediaType={ browser.mediaType }/>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default infoComponent;

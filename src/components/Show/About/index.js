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
import Common from './View/Common';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        locale: state.locale,
        mediaType: state.browser.mediaType
    };
})
class About extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        show: PropTypes.object.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { show } = this.props;

        /**
         * [RV]
         * View
         */
        const view = (<Common show={ show }/>);

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
export default About;

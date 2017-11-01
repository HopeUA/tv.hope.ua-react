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
class List extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        episodes: PropTypes.array.isRequired,
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { episodes, mediaType } = this.props;

        /**
         * [RV]
         * View
         */
        const view = (<Common mediaType={ mediaType } episodes={ episodes }/>);

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
export default List;

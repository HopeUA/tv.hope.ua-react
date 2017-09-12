/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';
import * as actions from './reducer';

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
    const localState = state[config.id] ? state[config.id] : {};

    return {
        mediaType: state.browser.mediaType,
        items: localState ? localState : {}
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
class About extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        items: PropTypes.object.isRequired,
        showId: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    static loader = () => ({ store: { dispatch }, params }) => {
        return dispatch(actions.fetchItem(params.showId));
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { showId, items } = this.props;

        if (!items[showId]) {
            return null;
        }
        const show = items[showId].item;

        /**
         * [RV]
         * View
         */
        const view = (
            <Common show={ show }/>
        );

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

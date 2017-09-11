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
class List extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        items: PropTypes.object.isRequired,
        mediaType: PropTypes.string.isRequired,
        showId: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    static loader = () => ({ store: { dispatch }, params }) => {
        return dispatch(actions.fetchItems(params.showId));
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { items, mediaType, showId } = this.props;

        if (!items[showId]) {
            return null;
        }
        const episodes = items[showId].items;

        /**
         * [RV]
         * View
         */
        const view = (
            <Common mediaType={ mediaType } episodes={ episodes }/>
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
export default List;

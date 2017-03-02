/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * [IV]
 * View Import
 */
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';
import * as actions from './reducer';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    const localState = state[config.id] ? state[config.id] : {};
    const popular = localState.popular ? localState.popular : {};

    return {
        mediaType: state.browser.mediaType,
        items: popular.items ? popular.items : []
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})

class Shows extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    static loader = (params) => ({ store: { dispatch } }) => {
        return dispatch(actions.fetchItems(params.type));
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType, items, title } = this.props;
        /**
         * [RV]
         * View
         */
        const view = BP.isDesktop(mediaType) || BP.isTabletPortrait(mediaType) ? (
            <Desktop items={ items } title={ title }/>
        ) : null;

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

export default Shows;

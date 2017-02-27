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
    return {
        mediaType: state.browser.mediaType,
        items: state[config.id].popular.items
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
        items: PropTypes.array.isRequired
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
        const { mediaType, items } = this.props;

        /**
         * [RV]
         * View
         */
        const view = BP.isDesktop(mediaType) || BP.isTabletPortrait(mediaType) ? (
            <Desktop items={ items }/>
        ) : null;

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

export default Shows;

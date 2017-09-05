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
import Mobile from './Views/Mobile';
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

    return {
        mediaType: state.browser.mediaType,
        items: localState.items ? localState.items : []
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
class Banner extends Component {
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
    static loader = () => ({ store: { dispatch } }) => {
        return dispatch(actions.fetchItems());
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
        let view;

        if (BP.isMobile(mediaType) || BP.isTabletPortrait(mediaType)) {
            view = (
                <Mobile mediaType={ mediaType } items={ items }/>
            );
        } else {
            view = (
                <Desktop mediaType={ mediaType } items={ items }/>
            );
        }

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
export default Banner;

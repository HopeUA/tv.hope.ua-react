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
        items: localState ? localState : {}
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
class Episode extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.object.isRequired,
        current: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    static loader = () => ({ store: { dispatch }, params }) => {
        return dispatch(actions.fetchItems(`${params.showId}${params.episodeId}`));
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
        const { mediaType, items, current } = this.props;

        const episodes = Object.values(items).sort((a, b) => {
            if (a.publish < b.publish) {
                return 1;
            }
            if (a.publish > b.publish) {
                return -1;
            }
            return 0;
        });

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile mediaType={ mediaType } items={ episodes } current={ current }/>
            );
        } else {
            view = (
                <Desktop items={ episodes } current={ current }/>
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
export default Episode;

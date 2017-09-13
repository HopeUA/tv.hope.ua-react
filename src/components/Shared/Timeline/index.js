/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * [IV]
 * View Import
 */
import Desktop from './Views/Desktop';

/**
 * [IA]
 */
import * as actions from './reducer';

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

@connect((state) => {
    const localState = state[config.id] ? state[config.id] : {};

    return {
        items: localState.items || [],
        loaded: localState.loaded || false,
        mediaType: state.browser.mediaType
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
class TimeLine extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        fetchItems: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CIS]
     * Internal state (optional)
     */
    state = {
        localTime: new Date()
    };

    /**
     * [CLOAD]
     */
    // static loader = () => ({ store: { dispatch } }) => {
    //     return dispatch(actions.fetchItems());
    // };

    timer = null;

    componentDidMount = () => {
        this.props.fetchItems();
        this.timer = setInterval(this.updateTime, 1000 * 30);
    };

    componentWillUnmount = () => {
        clearInterval(this.timer);
    };

    updateTime = () => {
        this.setState({
            localTime: new Date()
        });
    };

    /**
     * [CR]
     * Render function
     */
    render() {
        /**
         * [RPD]
         * Props destructuring
         */
        const { items, mediaType } = this.props;

        /**
         * [RSD]
         * State destructuring
         */
        const { localTime } = this.state;

        /**
         * [RV]
         * View
         */
        const view = BP.isDesktop(mediaType) ? (
            <Desktop mediaType={ mediaType } serverTime={ localTime.toISOString() } items={ items }/>
        ) : null;

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
export default TimeLine;

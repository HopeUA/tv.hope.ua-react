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
import DesktopGrid from './Views/DesktopGrid';
import DesktopRow from './Views/DesktopRow';

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

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state, props) => {
    const localState = state[config.id] && state[config.id][props.type] ? state[config.id][props.type] : {};

    return {
        items: localState.items || [],
        loaded: localState.loaded || false,
        mediaType: state.browser.mediaType
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
class Episodes extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        view: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        canRefresh: PropTypes.bool,
        scrollDisable: PropTypes.bool,
        fetchItems: PropTypes.func.isRequired,
        type: PropTypes.string.isRequired
    };

    /**
     * [CDP]
     * Component default props
     */
    static defaultProps = {
        canRefresh: false,
        scrollDisable: false
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CLOAD]
     */
    static loader = (params) => ({ store: { dispatch } }) => {
        return dispatch(actions.fetchItems(params.type));
    };

    handleRefresh = () => {
        this.props.fetchItems(this.props.type);
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
        const { mediaType, view, items, title, canRefresh, scrollDisable } = this.props;

        /**
         * [RVP]
         * View Props (optional)
         */
        const viewProps = {
            items: { items },
            title: { title }
        };

        /**
         * [RV]
         * View
         */
        let component = null;

        if (BP.isMobile(mediaType)) {
            component = (
                <Mobile
                    mediaType={ mediaType }
                    { ...viewProps }
                />
            );
        } else {
            switch (view) {
                case 'grid':
                    component = (
                        <DesktopGrid
                            { ...viewProps }
                            mediaType={ mediaType }
                            canRefresh={ canRefresh }
                            scrollDisable={ scrollDisable }
                            handleRefresh={ this.handleRefresh }
                        />
                    );
                    break;
                case 'row':
                    component = <DesktopRow { ...viewProps }/>;
                    break;
                default:
                    component = null;
            }
        }

        /**
         * [RR]
         * Return Component
         */
        return component;
    }
}

/**
 * [IE]
 * Export
 */
export default Episodes;

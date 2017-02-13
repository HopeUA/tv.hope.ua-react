import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Mobile from './Views/Mobile/';
import DesktopGrid from './Views/DesktopGrid';
import DesktopRow from './Views/DesktopRow/index';

import BreakPoints from 'helpers/breakpoints';
import * as actions from './reducer';

const componentId = 'Home.Episodes';

@connect((state, props) => {
    const localState = state[componentId] && state[componentId][props.type] ? state[componentId][props.type] : {};

    return {
        items: localState.items || [],
        loaded: localState.loaded || false,
        mediaType: state.browser.mediaType
    };
}, (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
})
export default class Episodes extends Component {
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

    static defaultProps = {
        scrollDisable: false,
        canRefresh: false
    };

    static displayName = componentId;

    static loader = (params) => ({ store: { dispatch } }) => {
        return dispatch(actions.fetchItems(params.type));
    };

    handleRefresh = () => {
        this.props.fetchItems(this.props.type);
    };

    render = () => {
        const { mediaType, view, items, title, canRefresh, scrollDisable } = this.props;

        const isMobile = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(mediaType) !== -1;

        let component = null;

        if (isMobile) {
            component = <Mobile mediaType={ mediaType } items={ items } title={ title }/>;
        } else {
            switch (view) {
                case 'grid':
                    component = (
                        <DesktopGrid
                            items={ items }
                            title={ title }
                            mediaType={ mediaType }
                            canRefresh={ canRefresh }
                            scrollDisable={ scrollDisable }
                            handleRefresh={ this.handleRefresh }
                        />
                    );
                    break;
                case 'row':
                    component = <DesktopRow items={ items } title={ title }/>;
                    break;
                default:
                    component = null;
            }
        }

        return component;
    }
}

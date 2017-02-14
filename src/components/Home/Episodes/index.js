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
        items: PropTypes.array.isRequired
    };

    static displayName = componentId;

    static loader = (params) => ({ store: { dispatch } }) => {
        return dispatch(actions.fetchItems(params.type));
    };

    render = () => {
        const { mediaType, view, items } = this.props;

        const isMobile = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(mediaType) !== -1;

        let component = null;

        if (isMobile) {
            component = (
                <Mobile
                    mediaType={ mediaType }
                    items={ items }
                />
            );
        } else {
            switch (view) {
                case 'grid':
                    component = <DesktopGrid items={ items }/>;
                    break;
                case 'row':
                    component = <DesktopRow items={ items }/>;
                    break;
                default:
                    component = null;
            }
        }

        return component;
    }
}

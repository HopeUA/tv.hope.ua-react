import React, { Component, PropTypes } from 'react';
import svg, { STATE_NORMAL, STATE_ACTIVE } from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class BannerArrow extends Component {

    static propTypes = {
        color: PropTypes.string,
        state: PropTypes.string,
        isPlaying: PropTypes.bool,
        showCircle: PropTypes.bool,
        index: PropTypes.number
    };

    render() {
        const { color, state, showCircle } = this.props;
        const hoverStyles = {
            opacity: state === STATE_ACTIVE ? 0.8 : 1
        };
        const circleStyles = {
            display: showCircle ? 'none' : 'block'
        };

        const hover = showCircle ? (
            <path
                fill={ color } style={ hoverStyles } d="M87.9,63c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9l33.6,
                33.6L85,133c-0.8,0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l35-35c0.4-0.4,0.6-0.9,
                0.6-1.5s-0.2-1.1-0.6-1.5L87.9,63z"
            />
            ) : (
            <path
                fill={ color }
                style={ hoverStyles } d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100c55.2,0,
                100-44.8,100-100S155.2,0,100,0z M123,100.9l-35,35c-0.8,0.8-2.1,0.8-2.9,0c-0.8-0.8-0.8-2.1,
                0-2.9l33.6-33.6L85,65.9c-0.8-0.8-0.8-2.1,0-2.9c0.8-0.8,2.1-0.8,2.9,0l35,35c0.4,0.4,0.6,0.9,0.6,
                1.5S123.4,100.5,123,100.9z"
            />);

        const arrow = state === STATE_NORMAL ? (
            <g>
                <path
                    fill={ color } d="M87.9,63c-0.8-0.8-2.1-0.8-2.9,0c-0.8,0.8-0.8,2.1,0,2.9l33.6,33.6L85,133c-0.8,
                    0.8-0.8,2.1,0,2.9c0.8,0.8,2.1,0.8,2.9,0l35-35c0.4-0.4,0.6-0.9,0.6-1.5s-0.2-1.1-0.6-1.5L87.9,63z"
                />
                <path
                    fill={ color } style={ circleStyles } d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,
                    100-100S155.2,0,100,0z M100,196.4c-53.1,0-96.4-43.2-96.4-96.4C3.6,46.9,46.9,3.6,100,3.6c53.1,0,96.4,
                    43.2,96.4,96.4C196.4,153.1,153.1,196.4,100,196.4z"
                />
            </g>
            ) : hover;

        return arrow;
    }
}

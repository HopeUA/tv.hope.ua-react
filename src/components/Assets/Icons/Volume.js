import React, { Component, PropTypes } from 'react';
import svg, { STATE_NORMAL, STATE_ACTIVE } from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Volume extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        isMuted: PropTypes.bool
    };

    static defaultProps = {
        isMuted: false
    };

    render() {
        const { color, state, isMuted } = this.props;

        const hoverStyles = {
            opacity: state === STATE_ACTIVE ? 0.8 : 1
        };

        const volume = state === STATE_NORMAL ? (
            <g>
                <path
                    fill={ color } d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,
                    0z M168.1,168.1c-8.8,8.8-19.2,15.8-30.6,20.6c-11.9,5-24.5,7.6-37.5,7.6s-25.6-2.5-37.5-7.6C51,183.9,
                    40.7,177,31.9,168.1c-8.8-8.8-15.8-19.2-20.6-30.6c-5-11.9-7.6-24.5-7.6-37.5s2.5-25.6,7.6-37.5C16.1,
                    51,23,40.7,31.9,31.9C40.7,23,51,16.1,62.5,11.2C74.4,6.2,87,3.7,100,3.7s25.6,2.5,37.5,7.6c11.5,
                    4.9,21.8,11.8,30.6,20.6c8.8,8.8,15.8,19.2,20.6,30.6c5,11.9,7.6,24.5,7.6,37.5s-2.5,25.6-7.6,
                    37.5C183.9,149,177,159.3,168.1,168.1z"
                />
                <path
                    fill={ color } d="M99.8,53.6c-2.7-1.3-5.9-1-8.3,0.8l-0.1,0.1L69.6,75.3H50c-4.4,0-7.9,3.6-7.9,
                    7.9v33.4c0,4.4,3.6,7.9,7.9,7.9h19.6l21.8,20.8l0.2,0.1c1.4,1.1,3.1,1.6,4.8,1.6c1.2,0,2.4-0.3,
                    3.5-0.8c2.7-1.3,4.4-4.1,4.4-7.1V60.8C104.2,57.7,102.5,55,99.8,53.6z M100.6,139.1c0,1.7-0.9,
                    3.1-2.3,3.9c-1.4,0.7-3.1,0.6-4.4-0.4l-22.7-21.7H50c-2.4,0-4.3-1.9-4.3-4.3V83.3c0-2.4,1.9-4.3,
                    4.3-4.3h21.1l22.7-21.7c1.3-0.9,2.9-1.1,4.4-0.4c1.5,0.7,2.4,2.2,2.4,3.9V139.1z"
                />
                <path
                    fill={ color } d="M122.1,67.5c-0.8-0.7-1.9-0.6-2.6,0.1c-0.7,0.8-0.6,1.9,0.1,2.6c8.9,7.9,13.8,18.5,
                    13.8,29.7c0,11.2-4.9,21.7-13.8,29.7c-0.8,0.7-0.8,1.8-0.1,2.6c0.4,0.4,0.9,0.6,1.4,0.6c0.4,0,
                    0.9-0.2,1.2-0.5c9.7-8.6,15-20.1,15-32.4C137.1,87.7,131.8,76.2,122.1,67.5z"
                />
                <path
                    fill={ color } d="M135.8,52c-0.8-0.7-1.9-0.6-2.6,0.1c-0.7,0.8-0.6,1.9,0.1,2.6c13.5,12.1,20.9,28.1,
                    20.9,45.2c0,17.2-7.6,33.4-21.3,45.5c-0.8,0.7-0.8,1.8-0.2,2.6c0.4,0.4,0.9,0.6,1.4,0.6c0.4,0,0.9-0.2,
                    1.2-0.5 c14.5-12.8,22.5-29.9,22.5-48.2C158,81.8,150.1,64.8,135.8,52z"
                />
            </g>
        ) : (
            <g style={ hoverStyles }>
                <path
                    fill={ color } d="M100,0C44.8,0,0,44.8,0,100c0,55.2,44.8,100,100,100s100-44.8,100-100C200,44.8,
                        155.2,0,100,0z M104.2,139.1c0,3.1-1.7,5.8-4.4,7.1c-1.1,0.6-2.3,0.8-3.5,0.8c-1.7,
                        0-3.4-0.5-4.8-1.6l-0.2-0.1l-21.8-20.8H50c-4.4,0-7.9-3.6-7.9-7.9V83.3c0-4.4,3.6-7.9,
                        7.9-7.9h19.6l21.8-20.8l0.1-0.1c2.4-1.8,5.6-2.1,8.3-0.8c2.7,1.3,4.4,4.1,4.4,7.1V139.1z M122.1,
                        132.3c-0.3,0.3-0.8,0.5-1.2,0.5c-0.5,0-1-0.2-1.4-0.6c-0.7-0.8-0.6-1.9,0.1-2.6c8.9-7.9,13.8-18.5,
                        13.8-29.7c0-11.2-4.9-21.7-13.8-29.7c-0.8-0.7-0.8-1.8-0.1-2.6c0.7-0.8,1.8-0.8,2.6-0.1c9.7,8.6,15,
                        20.1,15,32.4C137.1,112.2,131.8,123.7,122.1,132.3z M135.4,148.1c-0.3,0.3-0.8,0.5-1.2,0.5c-0.5,
                        0-1-0.2-1.4-0.6c-0.7-0.8-0.6-1.9,0.2-2.6c13.7-12.1,21.3-28.3,
                        21.3-45.5c0-17-7.4-33.1-20.9-45.2c-0.8-0.7-0.8-1.8-0.1-2.6c0.7-0.8,1.8-0.8,2.6-0.1C150.1,64.8,
                        158,81.8,158,99.9C158,118.2,149.9,135.3,135.4,148.1z"
                />
                <path
                    fill={ color } d="M98.2,56.9c-1.5-0.7-3.1-0.6-4.4,0.4L71.1,79H50c-2.4,0-4.3,1.9-4.3,4.3v33.4c0,2.4,
                        1.9,4.3,4.3,4.3h21.1l22.7,21.7c1.3,1,3,1.1,4.4,0.4c1.5-0.7,2.3-2.2,2.3-3.9V60.8C100.6,59.1,99.7,
                        57.6,98.2,56.9z"
                />
            </g>
        );

        const muted = state === STATE_NORMAL ? (
            <g>
                <path
                    fill={ color } d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,
                    0z M168.1,168.1c-8.8,8.8-19.2,15.8-30.6,20.6c-11.9,5-24.5,7.6-37.5,7.6c-13,0-25.6-2.5-37.5-7.6C51,
                    183.9,40.7,177,31.9,168.1c-8.8-8.8-15.8-19.2-20.6-30.6c-5-11.9-7.6-24.5-7.6-37.5s2.5-25.6,
                    7.6-37.5C16.1,51,23,40.7,31.9,31.9C40.7,23,51,16.1,62.5,11.2C74.4,6.2,87,3.7,100,3.7c13,0,
                    25.6,2.5,37.5,7.6c11.5,4.9,21.8,11.8,30.6,20.6c8.8,8.8,15.8,19.2,20.6,30.6c5,11.9,7.6,24.5,7.6,
                    37.5s-2.5,25.6-7.6,37.5C183.9,149,177,159.3,168.1,168.1z"
                />
                <path
                    fill={ color } d="M99.8,53.6c-2.7-1.3-5.9-1-8.3,0.8l-0.1,0.1L69.6,75.3H50c-4.4,0-7.9,3.6-7.9,
                    7.9v33.4c0,4.4,3.6,7.9,7.9,7.9h19.6l21.8,20.8l0.2,0.1c1.4,1.1,3.1,1.6,4.8,1.6c1.2,0,2.4-0.3,
                    3.5-0.8c2.7-1.3,4.4-4.1,4.4-7.1V60.8C104.2,57.7,102.5,55,99.8,53.6z M100.6,139.1c0,1.7-0.9,3.1-2.3,
                    3.9c-1.4,0.7-3.1,0.6-4.4-0.4l-22.7-21.7H50c-2.4,0-4.3-1.9-4.3-4.3V83.3c0-2.4,1.9-4.3,
                    4.3-4.3h21.1l22.7-21.7c1.3-0.9,2.9-1.1,4.4-0.4c1.5,0.7,2.4,2.2,2.4,3.9V139.1z"
                />
                <path
                    fill={ color } d="M142.5,100.1l12.7-12.7c0.7-0.7,0.7-1.9,0-2.6c-0.7-0.7-1.9-0.7-2.6,0l-12.7,
                    12.7l-13.1-13.1c-0.7-0.7-1.9-0.7-2.6,0c-0.7,0.7-0.7,1.9,0,2.6l13.1,13.1l-12.7,12.7c-0.7,0.7-0.7,
                    1.9,0,2.6c0.4,0.4,0.8,0.5,1.3,0.5s0.9-0.2,1.3-0.5l12.7-12.7l13.1,13.1c0.4,0.4,0.8,0.5,1.3,
                    0.5s0.9-0.2,1.3-0.5c0.7-0.7,0.7-1.9,0-2.6L142.5,100.1z"
                />
            </g>
        ) : (
            <g style={ hoverStyles }>
                <path
                    fill={ color } d="M98.2,56.9c-1.5-0.7-3.1-0.6-4.4,0.4L71.1,79H50c-2.4,0-4.3,1.9-4.3,4.3v33.4c0,
                        2.4,1.9,4.3,4.3,4.3h21.1l22.7,21.7c1.3,1,3,1.1,4.4,0.4c1.5-0.7,2.3-2.2,2.3-3.9V60.8C100.6,59.1,
                        99.7,57.6,98.2,56.9z"
                />
                <path
                    fill={ color } d="M100,0C44.8,0,0,44.8,0,100c0,55.2,44.8,100,100,100c55.2,0,100-44.8,100-100C200,
                        44.8,155.2,0,100,0zM104.2,139.1c0,3-1.7,5.8-4.4,7.1c-1.1,0.6-2.3,0.8-3.5,0.8c-1.7,
                        0-3.4-0.5-4.8-1.6l-0.2-0.1l-21.8-20.8H50c-4.4,0-7.9-3.6-7.9-7.9V83.3c0-4.4,3.6-7.9,
                        7.9-7.9h19.6l21.8-20.8l0.1-0.1c2.4-1.8,5.6-2.1,8.3-0.8c2.7,1.3,4.4,4.1,4.4,7.1V139.1z M155.6,
                        115.8c-0.4,0.4-0.8,0.5-1.3,0.5c-0.5,0-0.9-0.2-1.3-0.5l-13.1-13.1l-12.7,12.7c-0.4,0.4-0.8,
                        0.5-1.3,0.5c-0.5,0-0.9-0.2-1.3-0.5c-0.7-0.7-0.7-1.9,0-2.6l12.7-12.7L124.2,87c-0.7-0.7-0.7-1.9,
                        0-2.6c0.7-0.7,1.9-0.7,2.6,0l13.1,13.1l12.7-12.7c0.7-0.7,1.9-0.7,2.6,0c0.7,0.7,0.7,1.9,0,
                        2.6l-12.7,12.7l13.1,13.1C156.3,113.9,156.3,115.1,155.6,115.8z"
                />
            </g>
        );

        return isMuted ? muted : volume;
    }
}

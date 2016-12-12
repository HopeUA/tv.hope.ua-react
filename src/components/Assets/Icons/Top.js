import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Top extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M103.3,83.3c-1-1-2-1.4-3.4-1.4c-1.4,0-2.4,0.4-3.4,1.4l-26.4,26.4c-1,1-1.4,2.2-1.4,
                    3.4c0,1.2,0.4,2.6,1.4,3.6c2,2,4.8,2,6.7,0l23-23l23,23c2,2,4.8,2,6.7,0c2-2,2-5,0-6.9L103.3,83.3z"
                />
                <path
                    fill={ color } d="M180.1,0H19.9C9,0,0,9,0,19.9v160.2C0,191,9,200,19.9,200h160.2c11,0,19.9-9,
                    19.9-19.9V19.9C200,9,191,0,180.1,0z M192.5,180.1c0,6.9-5.6,12.4-12.4,12.4H19.9c-6.9,
                    0-12.4-5.6-12.4-12.4V19.9c0-6.9,5.6-12.4,12.4-12.4h160.2c6.9,0,12.4,5.6,12.4,12.4V180.1z"
                />
            </g>
        );
    }
}

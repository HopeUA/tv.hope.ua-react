import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 154,
    height: 192
})

/* eslint-disable react/prefer-stateless-function */
export default class Tv extends Component {
    static propTypes = {
        color: PropTypes.string,
        color1: PropTypes.string
    };

    static defaultProps = {
        color: '',
        color1: ''
    };

    render() {
        const { color, color1 } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M105.9,192H48.1c-2,0-3.5-1.6-3.5-3.5c0-2,1.6-3.5,3.5-3.5H106c2,0,3.5,1.6,3.5,
                    3.5S107.9,192,105.9,192z"
                />
                <path
                    fill={ color1 } d="M142.2,73.1c2.6,0,4.7,2.2,4.7,4.7v88c0,2.6-2.2,4.7-4.7,4.7H11.8c-2.6,
                    0-4.7-2.2-4.7-4.7v-88c0-2.6,2.2-4.7,4.7-4.7L142.2,73.1 M142.2,66H11.8C5.3,66,0,71.3,0,77.8v88c0,
                    6.5,5.3,11.8,11.8,11.8h130.4c6.5,0,11.8-5.3,11.8-11.8v-88C154,71.3,148.7,66,142.2,66L142.2,66z"
                />
                <path
                    fill={ color } d="M77.2,46.2L74.5,44l-29-26.5c-1.4-1.3-1.6-3.6-0.2-5c1.3-1.5,3.6-1.6,5-0.2L77,
                    36.7l39.3-35.8c1.4-1.3,3.7-1.2,5,0.2s1.2,3.7-0.2,5L77.2,46.2z"
                />
                <path
                    fill={ color1 } d="M88.8,58.5H65.2c-2,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h23.6c2,0,3.5,1.6,3.5,
                    3.5S90.8,58.5,88.8,58.5z"
                />
            </g>
        );
    }
}

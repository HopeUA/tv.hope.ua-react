import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Hamburger extends Component {

    static propTypes = {
        color: PropTypes.string,
        isOpened: PropTypes.boolean
    };

    render() {
        const { color, isOpened } = this.props;

        const icon = isOpened ? (
            <path
                fill={ color } d="M121.4,100.2L195.6,26c5.9-5.9,5.9-15.4,0-21.3c-5.9-5.9-15.4-5.9-21.3,0l-74.2,
                74.2L25.7,4.4c-5.9-5.9-15.4-5.9-21.3,0c-5.9,5.9-5.9,15.4,0,21.3l74.5,74.5L4.7,174.3c-5.9,5.9-5.9,
                15.4,0,21.3c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4l74.2-74.2l74.2,74.2c2.9,2.9,6.8,4.4,10.6,
                4.4s7.7-1.5,10.6-4.4c5.9-5.9,5.9-15.4,0-21.3L121.4,100.2z"
            />
        ) : (
            <g>
                <path
                    fill={ color } d="M190,0H10C4.5,0,0,4.5,0,10v10c0,5.5,4.5,10,10,10h180c5.5,0,10-4.5,10-10V10C200,
                    4.5,195.5,0,190,0z"
                />
                <path
                    fill={ color } d="M190,85H10C4.5,85,0,89.5,0,95v10c0,5.5,4.5,10,10,10h180c5.5,0,10-4.5,10-10V95C200,
                    89.5,195.5,85,190,85z"
                />
                <path
                    fill={ color } d="M190,170H10c-5.5,0-10,4.5-10,10v10c0,5.5,4.5,10,10,10h180c5.5,0,10-4.5,
                    10-10v-10C200,174.5,195.5,170,190,170z"
                />
            </g>
        );

        return icon;
    }
}

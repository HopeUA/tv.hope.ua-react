import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 150
})

/* eslint-disable react/prefer-stateless-function */
export default class YouTube extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    static defaultProps = {
        color: ''
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M162.5,0h-125C16.9,0,0,16.9,0,37.5v75C0,133.1,16.9,150,37.5,150h125c20.6,0,
                    37.5-16.9,37.5-37.5v-75C200,16.9,183.1,0,162.5,0z M180.5,112.5c0,4.8-1.9,9.3-5.3,12.7c-3.4,3.4-7.9,
                    5.3-12.7,5.3h-125c-4.8,0-9.3-1.9-12.7-5.3c-3.4-3.4-5.3-7.9-5.3-12.7v-75c0-4.8,1.9-9.3,
                    5.3-12.7c3.4-3.4,7.9-5.3,12.7-5.3h125c4.8,0,9.3,1.9,12.7,5.3c3.4,3.4,5.3,7.9,5.3,12.7V112.5z"
                />
                <path
                    fill={ color } d="M127.5,67L91.7,38.4C85,33,75,37.8,75,46.4v57.2c0,8.6,10,13.4,16.7,8L127.5,
                    83C132.6,78.9,132.6,71.1,127.5,67z"
                />
            </g>
        );
    }
}

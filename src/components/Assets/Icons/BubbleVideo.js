import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 194
})

/* eslint-disable react/prefer-stateless-function */
export default class BubbleVideo extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M169.9,152c18.5-16.1,30.1-38.5,30.1-63.3C200,39.7,155.2,0,100,0S0,39.7,0,
                88.7s44.8,88.7,100,88.7c7.2,0,14.2-0.7,21-2c10.8,5.3,55.2,25.5,77.4,16.3C200.2,185.1,174,175.6,169.9,
                152z M126.2,101.7l-16.1,12.2l-7.7,5.8c-10.1,7.7-24.6,0.4-24.6-12.3V89.4V71.3c0-12.7,14.5-20,
                24.6-12.3l7.7,5.8l16.1,12.2C134.3,83.3,134.3,95.5,126.2,101.7z"
            />
        );
    }
}

import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 194
})

/* eslint-disable react/prefer-stateless-function */
export default class BubbleArticle extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M169.9,152c18.5-16.1,30.1-38.5,30.1-63.3C200,39.7,155.2,0,100,0S0,39.7,
                0,88.7s44.8,88.7,100,88.7c7.2,0,14.2-0.7,21-2c10.8,5.3,55.2,25.5,77.4,16.3C200.2,185.1,174,175.6,
                169.9,152z M92.9,92.3c0,24.1-10.6,37.6-31.6,40.2c0,0-0.1,0-0.1,0c-0.2,
                0-0.5-0.1-0.6-0.2c-0.2-0.2-0.3-0.5-0.3-0.7v-12.2c0-0.4,0.2-0.7,0.5-0.9c9.5-5.2,14.3-13.5,
                14.6-25.1H61.2c-0.5,0-1-0.4-1-1V61.5c0-0.5,0.4-1,1-1h30.7c0.5,0,1,0.4,1,1V92.3z M147.3,92.3c0,
                23.7-9.4,35.8-31.5,40.2c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.4-0.5-0.4-0.8v-12.2c0-0.4,
                0.2-0.7,0.5-0.9c9.5-5.2,14.3-13.5,14.6-25.1h-14.1c-0.5,0-1-0.4-1-1V61.5c0-0.5,0.4-1,1-1h30.7c0.5,0,1,
                0.4,1,1V92.3z"
            />
        );
    }
}

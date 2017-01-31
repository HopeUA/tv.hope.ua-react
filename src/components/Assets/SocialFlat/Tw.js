import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 162
})

/* eslint-disable react/prefer-stateless-function */
export default class Tw extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M200,19.2c-7.4,3.3-15.3,5.5-23.6,6.4c8.5-5.1,15-13.1,18-22.6c-7.9,4.7-16.7,8.1-26.1,
                9.9C160.9,5,150.3,0,138.5,0c-22.7,0-41,18.3-41,40.9c0,3.2,0.4,6.3,1.1,
                9.3c-34.1-1.7-64.3-18-84.6-42.7c-3.5,6-5.5,13.1-5.5,20.6c0,14.2,7.2,26.7,18.2,
                34c-6.7-0.2-13-2.1-18.6-5.1v0.5C8,77.3,22.2,93.8,41,97.6c-3.4,0.9-7.1,1.4-10.8,
                1.4c-2.6,0-5.2-0.3-7.7-0.7c5.2,16.2,20.4,28.1,38.3,28.4c-14,11-31.7,17.5-51,
                17.5c-3.3,0-6.6-0.2-9.8-0.6C18.2,155.2,39.7,162,62.9,162c75.5,0,116.7-62.3,
                116.7-116.4l-0.1-5.3C187.5,34.6,194.5,27.4,200,19.2z"
            />
        );
    }
}

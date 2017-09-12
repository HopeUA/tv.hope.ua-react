import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 40,
    height: 40
})

/* eslint-disable react/prefer-stateless-function */
export default class Play extends Component {
    static propTypes = {
        color: PropTypes.string
    };

    static defaultProps = {
        color: ''
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M31.2,0H8.8C3.9,0,0,3.9,0,8.8v22.5C0,36.1,3.9,40,8.8,40h22.5c4.8,0,8.8-3.9,
                8.8-8.8V8.8C40,3.9,36.1,0,31.2,0z M28.8,21.4l-12.4,7.2c-1.1,0.6-2.5-0.2-2.5-1.4l0-14.3c0-1.3,
                1.4-2,2.5-1.4l12.4,7.1C29.9,19.2,29.9,20.8,28.8,21.4z"
            />
        );
    }
}

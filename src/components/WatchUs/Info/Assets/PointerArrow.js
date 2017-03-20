import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 78,
    height: 20
})

/* eslint-disable react/prefer-stateless-function */
export default class PointerArrow extends Component {
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
                fill={ color } d="M24.1,1.7c9-2.4,18.4-1.5,27.3,1.2c5.6,1.7,10.8,4.5,15.8,
                7.5c-1.4-1.8-2.6-3.8-3.4-6c-0.3-0.8-0.3-1.9,0.7-2.1c0.8-0.2,1.3,0.6,1.5,1.2c0.9,2.1,1.9,4.1,3.5,
                5.9c1.5,1.7,3.3,3.2,5,4.7c0.9,0.8,1.8,1.5,2.6,2.4c0.5,0.6,1.2,1.2,0.8,2c-0.4,0.7-1.1,0.7-1.8,
                0.5c-1.1-0.4-2.1-0.9-3.2-1.4c-2.2-1-4.2-2.3-6.4-3.1c-2-0.7-4.2-1.1-6.3-1.1c-0.8,0-2.2,
                0.2-2.5-0.9c-0.1-0.8,0.5-1.4,1.2-1.5c2.3-0.4,5,0.3,7.2,
                0.9c-5-2.8-10.1-5.4-15.6-7c-5.1-1.5-10.4-2.4-15.7-2.3C25.1,2.7,15.7,6.6,8.4,13c-1.2,1-2.3,2.1-3.4,
                3.3c-0.9,1-1.7,2.3-2.7,3.2c-0.8,0.6-2,0.4-2.3-0.6c-0.4-1.4,1.9-3.4,2.8-4.4c1.2-1.3,
                2.5-2.6,3.9-3.8c2.8-2.3,5.8-4.3,9.1-5.9C18.5,3.4,21.3,2.4,24.1,1.7z"
            />
        );
    }
}
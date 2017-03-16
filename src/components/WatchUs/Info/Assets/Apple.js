import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 80,
    height: 98
})

/* eslint-disable react/prefer-stateless-function */
export default class Apple extends Component {
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
                fill={ color } d="M66.8,52.1C66.7,39.7,77,33.7,77.4,33.4c-5.8-8.4-14.8-9.6-18-9.7c-7.7-0.8-14.9,
                4.5-18.8,4.5c-3.9,0-9.9-4.4-16.2-4.3c-8.3,0.1-16,4.8-20.3,12.3c-8.7,15-2.2,37.2,6.2,49.4c4.1,6,9,12.6,
                15.5,12.4c6.2-0.2,8.6-4,16.1-4c7.5,0,9.6,4,16.2,3.9c6.7-0.1,10.9-6.1,15-12c4.7-6.9,6.7-13.6,
                6.8-13.9C79.9,71.8,66.9,66.9,66.8,52.1z M54.4,15.6c3.4-4.1,5.7-9.9,5.1-15.6c-4.9,0.2-10.9,3.3-14.5,
                7.4c-3.2,3.7-6,9.5-5.2,15.2C45.4,23,51,19.8,54.4,15.6z"
            />
        );
    }
}

import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Instagram extends Component {
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
                    fill={ color } d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100c55.1,0,100-44.9,100-100C200,
                    44.9,155.1,0,100,0zM100,194.5c-52.1,0-94.5-42.4-94.5-94.5S47.9,5.5,100,5.5s94.5,42.4,94.5,
                    94.5S152.1,194.5,100,194.5z"
                />
                <path
                    fill={ color } d="M136.6,59.3h-8.1c-2.2,0-4.1,1.8-4.1,4.1v8.1c0,2.2,1.8,4.1,4.1,4.1h8.1c2.2,0,
                    4.1-1.8,4.1-4.1v-8.1C140.7,61.1,138.9,59.3,136.6,59.3z"
                />
                <path
                    fill={ color } d="M100,115.5c8.6,0,15.5-6.9,15.5-15.5c0-8.6-7-15.5-15.5-15.5c-3,0-5.7,0.9-8,
                    2.3c0.7-0.2,1.5-0.4,2.3-0.4c4.3,0,7.9,3.5,7.9,7.9c0,4.3-3.5,7.9-7.9,7.9c-4.3,
                    0-7.9-3.5-7.9-7.9c0-0.8,0.2-1.6,0.4-2.3c-1.4,2.3-2.3,5.1-2.3,8C84.5,108.6,91.4,115.5,100,115.5z"
                />
                <path
                    fill={ color } d="M133.1,47.1H66.9c-11,0-19.8,8.9-19.8,19.8v66.1c0,11,8.9,19.8,19.8,19.8h66.1c11,
                    0,19.8-8.9,19.8-19.8V66.9C152.9,56,144,47.1,133.1,47.1z M76.1,95.3c0.1-0.6,0.4-1.2,0.5-1.9c0.2-0.9,
                    0.5-1.7,0.8-2.5c0.3-0.8,0.7-1.5,1.1-2.2c0.3-0.6,0.6-1.2,1-1.8c0.5-0.7,1-1.4,1.6-2.1c4.5-5.6,
                    11.3-9.2,19-9.2c7.7,0,14.5,3.6,19,9.2c0.5,0.7,1.1,1.4,1.6,2.1c0.4,0.6,0.7,1.2,1,1.8c0.4,0.7,0.8,1.4,
                    1.1,2.2c0.3,0.8,0.5,1.7,0.8,2.5c0.2,0.6,0.4,1.2,0.5,1.9c0.3,1.5,0.5,3.1,0.5,4.7c0,13.5-10.9,
                    24.4-24.4,24.4c-13.5,0-24.4-10.9-24.4-24.4C75.6,98.4,75.8,96.8,76.1,95.3z M144.8,
                    83.7H128c-5.6-9.7-16-16.3-28-16.3S77.6,74,72,83.7H55.3V66.9c0-6.4,5.2-11.7,11.7-11.7h66.1c6.5,0,
                    11.7,5.2,11.7,11.7V83.7z"
                />
            </g>
        );
    }
}

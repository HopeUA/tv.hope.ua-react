import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class SmallPlay extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100s100-44.9,100-100C200,44.9,
                    155.1,0,100,0z M100,190c-49.6,0-90-40.4-90-90c0-49.6,40.4-90,90-90s90,40.4,90,90C190,149.6,149.6,
                    190,100,190z"
                />
                <path
                    fill={ color } d="M133.2,91L99,62.4c-4.2-3.5-9.9-4.3-14.9-1.9c-5,2.3-8,7.2-8,12.6v57.3c0,5.5,3.1,
                    10.3,8,12.6c1.9,0.9,3.9,1.3,5.9,1.3c3.2,0,6.3-1.1,8.9-3.3l34.2-28.6c3.2-2.7,5-6.6,5-10.7C138.2,
                    97.6,136.4,93.7,133.2,91z M126.8,104.8l-34.2,28.6c-1.7,1.5-3.5,0.9-4.2,
                    0.6c-0.7-0.3-2.3-1.3-2.3-3.6V73.1c0-2.3,1.6-3.3,2.3-3.6c0.3-0.2,1-0.4,1.7-0.4c0.7,0,1.6,0.2,
                    2.5,0.9l34.2,28.6c0,0,0,0,0,0c1.2,1,1.4,2.3,1.4,3C128.2,102.4,128,103.7,126.8,104.8z"
                />
            </g>
        );
    }
}

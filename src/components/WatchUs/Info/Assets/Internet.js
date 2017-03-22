import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 161,
    height: 192
})

/* eslint-disable react/prefer-stateless-function */
export default class Internet extends Component {
    static propTypes = {
        color: PropTypes.string,
        color1: PropTypes.string
    };

    static defaultProps = {
        color: '',
        color1: ''
    };

    render() {
        const { color, color1 } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M106.9,153.2c-0.9,0-1.8-0.1-2.6-0.1v13c0,2.5-2.1,4.7-4.7,4.7H11.7c-2.5,
                    0-4.7-2.2-4.7-4.7V23.9c0-2.5,2.1-4.7,4.7-4.7h87.8c2.5,0,4.7,2.2,4.7,4.7v1.5c0.9,0,1.7-0.1,
                    2.6-0.1c1.5,0,2.9,0.1,4.4,0.2v-1.6c0-6.5-5.3-11.7-11.7-11.7H11.7C5.3,12.1,0,17.4,0,23.9v142.2c0,6.5,
                    5.3,11.7,11.7,11.7h87.8c6.5,0,11.7-5.3,11.7-11.7V153C109.8,153.1,108.4,153.2,106.9,153.2z"
                />
                <path
                    fill={ color1 } d="M106.9,34.3c-29.9,0-54.1,24.3-54.1,54.2c0,29.9,24.2,54.2,54.1,54.2S161,118.3,161,
                    88.4C161,58.5,136.8,34.3,106.9,34.3z M106.9,135.6c-3.8,0-10.2-8.8-13.5-25.4c4.3,0.5,8.8,0.7,13.5,
                    0.7c4.7,0,9.1-0.3,13.5-0.7C117.1,126.7,110.7,135.6,106.9,135.6z M106.9,103.9c-5.3,
                    0-10.1-0.3-14.6-0.9c-0.5-4.4-0.9-9.3-0.9-14.6c0-5.3,0.3-10.1,0.9-14.6c4.4-0.5,9.3-0.9,14.6-0.9c5.3,
                    0,10.1,0.3,14.6,0.9c0.5,4.4,0.9,9.3,0.9,14.6c0,5.3-0.3,10.1-0.9,14.6C117,103.6,112.2,103.9,106.9,
                    103.9z M85.1,101.9c-16.5-3.2-25.3-9.7-25.3-13.5c0-3.8,8.8-10.2,25.3-13.5c-0.5,4.3-0.7,8.8-0.7,
                    13.5S84.7,97.6,85.1,101.9z M106.9,41.3c3.8,0,10.2,8.8,13.5,25.4c-4.3-0.5-8.8-0.7-13.5-0.7c-4.7,
                    0-9.1,0.3-13.5,0.7C96.6,50.1,103.1,41.3,106.9,41.3z M128.6,75c16.5,3.2,25.3,9.7,25.3,13.5c0,3.8-8.8,
                    10.2-25.3,13.5c0.5-4.3,0.7-8.8,0.7-13.5S129.1,79.3,128.6,75z M152.3,
                    76.2c-5.9-3.8-14.5-6.8-24.7-8.6c-1.8-10.2-4.8-18.8-8.6-24.7C135.2,47.3,148,60,152.3,76.2z M94.7,
                    43c-3.8,5.9-6.8,14.5-8.6,24.7c-10.2,1.8-18.7,4.8-24.7,8.6C65.8,60,78.5,47.3,94.7,43zM61.5,100.6c5.9,
                    3.8,14.5,6.8,24.7,8.6c1.8,10.2,4.8,18.8,8.6,24.7C78.5,129.5,65.8,116.8,61.5,100.6z M119.1,
                    133.9c3.8-5.9,6.8-14.5,8.6-24.7c10.2-1.8,18.7-4.8,24.7-8.6C148,116.8,135.2,129.5,119.1,133.9z"
                />
                <path
                    fill={ color } d="M55.6,162.9c-7,0-12.6-5.7-12.6-12.6c0-7,5.7-12.6,12.6-12.6s12.6,5.7,12.6,
                    12.6C68.3,157.2,62.6,162.9,55.6,162.9z M55.6,144.7c-3.1,0-5.6,2.5-5.6,5.6c0,3.1,2.5,5.6,5.6,
                    5.6s5.6-2.5,5.6-5.6C61.2,147.2,58.7,144.7,55.6,144.7z"
                />
                <path
                    fill={ color } d="M73.2,34.4H46.6c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h26.6c1.9,0,3.5,1.6,3.5,
                    3.5S75.1,34.4,73.2,34.4z"
                />
                <path
                    fill={ color } d="M90,7H71c-1.9,0-3.5-1.6-3.5-3.5S69,0,71,0H90c1.9,0,3.5,1.6,3.5,3.5S92,7,90,7z"
                />
                <path
                    fill={ color1 } d="M84.4,192H26.9c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5h57.5c1.9,0,3.5,1.6,
                    3.5,3.5C87.9,190.4,86.3,192,84.4,192z"
                />
                <ellipse
                    fill={ color }
                    cx="35.8"
                    cy="30.9"
                    rx="3.5"
                    ry="3.5"
                />
            </g>
        );
    }
}

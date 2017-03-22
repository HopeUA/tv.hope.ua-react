import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 140
})

/* eslint-disable react/prefer-stateless-function */
export default class Hope extends Component {
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
                    fill={ color } d="M169.7,3.3c-2.4-1.9-5.5-3.3-9.6-3.3L9.9,0c0,0-12.4-0.7-9.5,12.4l25.5,
                    116.7c0,0,2.9,13.1,15,10.5l28-8.3l0.1-1.4c1.7-22.1-0.2-28.3-2.6-39.2C62,70,34.5,39.2,32,
                    37c-2.4-2.2-3.3-7.2,5.5-2.8c36.3,18.2,61.2,51.5,63.5,51.5c3.6-0.1,48-61.1,65.8-79.7C167.9,4.9,
                    168.8,4,169.7,3.3z M99.6,66.8c-13.5,0-24.4-11.1-24.4-24.8c0-13.7,11-24.7,24.5-24.7c13.5,0,24.4,
                    11.1,24.4,24.8C124.1,55.7,113.1,66.8,99.6,66.8z"
                />
                <path
                    fill={ color } d="M199.2,79.9l-22.8-66.4c0,0-0.6-2.2-2.2-4.9C152,53,138.5,82.3,136.2,111.5L191,
                    95.4C191,95.4,203.1,92.7,199.2,79.9z"
                />
            </g>
        );
    }
}

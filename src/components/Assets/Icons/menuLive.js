import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class menuLive extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M100,0C44.8,0,0,44.8,0,100s44.8,100,100,100s100-44.8,100-100S155.2,0,100,0z M100,
                    175.5c-41.6,0-75.5-33.9-75.5-75.5S58.4,24.5,100,24.5s75.5,33.9,75.5,75.5S141.6,175.5,100,175.5z"
                />
                <path
                    fill={ color } d="M124.5,87.6l-34-20.4c-9.7-5.8-22,1.2-22,12.4v40.8c0,11.3,12.3,18.3,22,12.4l34-20.4
                    C133.9,106.8,133.9,93.2,124.5,87.6z"
                />
            </g>
        );
    }
}

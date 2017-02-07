import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Fb extends Component {
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
                    fill={ color } d="M84.7,64.1c0,3,0.1,17.4,0.1,17.4H72.5V100l12.2,0l0.1,58.6h24.7V100l15.8,
                    0c0,0,1.2-8.1,1.9-18.5c-2.1,0-17.7,0-17.7,0s-0.4-12.8-0.4-14.8c0-2,2.6-4.7,5.3-4.7c2.6,0,8.1,0,
                    13.2,0c0-2.7,0-12,0-20.5c-6.8,0-14.6,0-18,0C84.1,41.4,84.7,61.2,84.7,64.1z"
                />
            </g>
        );
    }
}

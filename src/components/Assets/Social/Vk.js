import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Vk extends Component {
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
                    fill={ color } d="M167.8,138.3c-2.4-4.3-7-9.7-13.8-16l-0.1-0.1l-0.1-0.1l-0.1-0.1
                    h-0.1c-3.1-2.9-5-4.9-5.9-5.9c-1.5-1.9-1.8-3.9-1-5.9c0.6-1.5,2.7-4.7,6.5-9.5c2-2.6,3.5-4.6,
                    4.7-6.2c8.4-11.1,12-18.2,10.9-21.3l-0.4-0.7c-0.3-0.4-1-0.8-2.2-1.2c-1.2-0.4-2.8-0.4-4.6-0.2l-20.9,
                    0.1c-0.5,0-1,0-1.4,0c-0.5,0.1-0.8,0.1-0.9,0.2c-0.1,0.1-0.3,0.1-0.4,0.2l-0.3,0.2c-0.2,0.1-0.5,
                    0.4-0.8,0.8c-0.3,0.4-0.5,0.8-0.7,1.3c-2.3,5.8-4.9,11.3-7.7,16.3c-1.8,3-3.4,5.6-4.9,7.8c-1.5,2.2-2.8,
                    3.8-3.8,4.9c-1,1-1.9,1.9-2.8,2.5c-0.8,0.6-1.4,0.9-1.9,
                    0.8c-0.4-0.1-0.8-0.2-1.2-0.3c-0.7-0.4-1.2-1-1.6-1.8c-0.4-0.7-0.7-1.7-0.8-2.8
                    c-0.1-1.1-0.2-2.1-0.3-2.9c0-0.8,0-2,0-3.5c0-1.5,0.1-2.5,0.1-3c0-1.8,0-3.8,0.1-6c0.1-2.1,0.1-3.9,
                    0.2-5.1c0-1.3,0.1-2.6,0.1-4c0-1.4-0.1-2.5-0.3-3.3c-0.2-0.8-0.4-1.6-0.8-2.3c-0.3-0.7-0.8-1.3-1.5-1.7
                    c-0.7-0.4-1.5-0.7-2.4-1c-2.6-0.6-5.8-0.9-9.8-0.9c-9-0.1-14.7,0.5-17.3,1.7c-1,0.5-1.9,1.3-2.8,2.2
                    c-0.9,1.1-1,1.6-0.4,1.7c2.9,0.4,4.9,1.5,6.2,3.1l0.4,0.9c0.3,0.6,0.7,1.7,1,3.3c0.3,1.6,0.6,3.4,0.7,
                    5.3c0.2,3.5,0.2,6.5,0,9.1c-0.2,2.5-0.5,4.5-0.7,5.9c-0.2,1.4-0.5,2.5-1,3.4c-0.4,0.9-0.7,1.4-0.9,
                    1.6c-0.1,0.2-0.3,0.3-0.4,0.4c-0.6,0.2-1.3,0.4-2,0.4c-0.7,
                    0-1.5-0.3-2.5-1c-1-0.7-2-1.6-3-2.8c-1-1.2-2.2-2.8-3.5-5c-1.3-2.1-2.7-4.6-4.1-7.5
                    l-1.2-2.1c-0.7-1.3-1.7-3.3-3-5.9c-1.3-2.6-2.4-5.1-3.3-7.5c-0.4-1-1-1.8-1.7-2.3l-0.4-0.2
                    c-0.2-0.2-0.6-0.4-1.2-0.6c-0.5-0.2-1.1-0.4-1.7-0.5l-19.8,0.1c-2,0-3.4,0.5-4.1,1.4L30.1,73c-0.1,
                    0.2-0.2,0.6-0.2,1.2c0,0.5,0.1,1.2,0.4,2c2.9,6.8,6,13.4,9.4,19.7c3.4,6.3,6.4,11.4,8.9,15.3c2.5,3.9,
                    5.1,7.5,7.7,10.9c2.6,3.4,4.3,5.6,5.2,6.6c0.8,1,1.5,1.7,2,2.2l1.8,1.7c1.2,1.2,2.9,2.5,5.1,4.2c2.2,
                    1.6,4.7,3.2,7.5,4.8c2.7,1.6,5.9,2.8,9.5,3.8c3.6,1,7.1,1.4,10.6,1.2h8.3c1.7-0.1,3-0.7,
                    3.8-1.6l0.3-0.4c0.2-0.3,0.4-0.7,0.5-1.3c0.2-0.6,0.3-1.3,0.3-2c0-2.1,0.1-3.9,0.5-5.6c0.4-1.7,0.8-2.9,
                    1.2-3.8c0.5-0.8,1-1.6,1.6-2.1c0.6-0.6,1-0.9,1.2-1c0.2-0.1,0.4-0.2,0.6-0.3c1.2-0.4,2.5,0,4.1,1.1c1.6,
                    1.1,3,2.5,4.4,4.2c1.4,1.7,3,3.5,5,5.6c1.9,2.1,3.6,3.6,5.1,4.6l1.4,0.9c1,0.6,2.2,1.1,3.8,1.6c1.5,0.5,
                    2.9,0.6,4.1,0.4l18.5-0.3c1.8,0,3.3-0.3,4.3-0.9c1-0.6,1.6-1.3,1.8-2c0.2-0.7,0.2-1.5,
                    0-2.5c-0.2-0.9-0.3-1.6-0.5-1.9C168.1,138.9,167.9,138.6,167.8,138.3z"
                />
            </g>
        );
    }
}

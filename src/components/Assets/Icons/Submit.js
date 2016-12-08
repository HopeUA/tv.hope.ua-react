import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

export const TYPE_NORMAL = 'normal';
export const TYPE_LOADING = 'loading';
export const TYPE_ERROR = 'error';
export const TYPE_SUCCESS = 'success';

@svg({
    width: 200,
    height: 154
})
/* eslint-disable react/prefer-stateless-function */
export default class letter extends Component {

    static propTypes = {
        color: PropTypes.string,
        type: PropTypes.string
    };

    render() {
        const { color, type } = this.props;

        const normal = (
            <g>
                <path
                    fill={ color } d="M174.9,0H25.1C11.2,0,0,11.2,0,24.9v104.1C0,142.8,11.2,154,25.1,154h149.8c13.8,
                    0,25.1-11.2,25.1-24.9V24.9C200,11.2,188.8,0,174.9,0z M190.5,129.1c0,8.5-7,15.5-15.6,15.5H25.1c-8.6,
                    0-15.6-6.9-15.6-15.5V24.9c0-8.5,7-15.5,15.6-15.5h149.8c8.6,0,15.6,6.9,15.6,15.5V129.1z"
                />
                <path
                    fill={ color } d="M167.9,25.9l-58.2,46.6c-5.7,4.5-13.9,4.5-19.5,0L32.1,25.9c-2-1.6-5-1.3-6.7,
                    0.7c-1.7,2-1.3,5,0.7,6.7l58.2,46.6c4.6,3.7,10.1,5.5,15.7,5.5c5.6,0,
                    11.2-1.8,15.7-5.5l58.2-46.6c2-1.6,2.4-4.6,0.7-6.7C173,24.6,170,24.3,167.9,25.9z"
                />
            </g>
        );

        const loading = (
            <g>
                <path
                    fill={ color } d="M198.6,68.6L175,45c-2-2-5-2-7,0l-23.6,23.6c-3.2,3-1,8.4,3.6,8.4h18.4l0,0c0,
                    36.4-29.8,66-66.3,66c-17.8,0-34.4-6.8-47-19.4c-2-2-5-2-7,0s-2,5,0,7C60.5,145,79.5,153,99.9,153c42,
                    0,76.3-34,76.3-76l0,0H195C199.4,77,201.6,71.6,198.6,68.6z"
                />
                <path
                    fill={ color } d="M52.1,77H33.6l0,0c0-36.4,29.8-66,66.3-66c17.8,0,34.4,6.8,47,19.4c2,2,5,2,7,
                    0s2-5,0-7C139.5,9,120.3,1,99.9,1c-42,0-76.3,34-76.3,76l0,0H5c-4.4,0-6.6,5.4-3.6,8.4L25.2,109c2,2,5,
                    2,7,0l23.6-23.6C58.9,82.4,56.7,77,52.1,77z"
                />
            </g>
        );

        const success = (
            <g>
                <path
                    fill={ color } d="M175,59.8c-0.6-2.9-3.5-4.6-6.3-4c-2.9,0.6-4.6,3.5-4,6.3c1.1,4.8,1.7,9.9,1.7,
                    14.8c0,36.7-29.7,66.4-66.4,66.4c-36.7,0.2-66.4-29.6-66.4-66.2S63.3,10.6,100,10.6c5.7,0,11.2,0.8,
                    16.6,2.2c2.8,0.8,5.7-0.9,6.5-3.9c0.8-2.8-0.9-5.7-3.8-6.5C112.9,0.8,106.5,0,100,0C57.5,0,23,34.5,23,
                    77s34.5,77,77,77s77-34.5,77-77C177,71.1,176.4,65.4,175,59.8z"
                />
                <path
                    fill={ color } d="M68.1,72.5c-2.2-2.2-5.5-2.2-7.7,0c-2.2,2.2-2.2,5.5,0,7.7l25.1,25.1c1.1,1.1,2.5,
                    1.5,3.9,1.5c0.2,0,0.2,0,0.3,0c1.4-0.2,2.9-0.8,4-2l62.8-75.3c1.8-2.3,
                    1.5-5.7-0.6-7.7c-2.3-1.8-5.7-1.5-7.7,0.6L89.1,93.3L68.1,72.5z"
                />
            </g>
        );

        const error = (
            <g>
                <path
                    fill={ color } d="M100.2,108.8c-4.7,0-8.7,4-8.7,8.9c0,4.9,4,8.9,8.7,8.9c4.5,0,8.7-4,8.6-8.5C108.9,
                    112.8,104.9,108.8,100.2,108.8z"
                />
                <path
                    color={ color } d="M98,42.7c-4.2,1.2-6.7,5-6.7,9.7c0.2,2.8,0.3,5.5,0.7,8.4c0.7,10.5,1.2,21.1,1.8,
                    31.6c0.2,3.5,3,6.2,6.5,6.2s6.4-2.8,6.5-6.4c0-2.2,0-4.2,0.2-6.4c0.3-6.9,0.8-13.6,1.2-20.4c0.2-4.4,
                    0.7-8.9,0.8-13.2c0-1.5-0.2-3-0.8-4.4C106.2,43.7,102,41.7,98,42.7z"
                />
                <path
                    fill={ color } d="M180.1,110.3L125,14.6C120,5.5,110.6,0,100,0S80.2,5.5,75,14.6l-55.1,95.7c-5.2,
                    9.2-5.2,20.1,0.2,29.3c5.2,9,14.6,14.4,25,14.4h109.8c10.4,0,19.8-5.5,25.2-14.7C185.3,130.2,185.3,
                    119.4,180.1,110.3z M170.5,133.9c-3.4,5.7-9.2,9.2-15.8,9.2H44.9c-6.5,
                    0-12.3-3.3-15.6-9c-3.4-5.7-3.4-12.6,0-18.2l55.1-95.7c3.2-5.7,9.1-9,15.6-9c6.5,0,12.3,3.3,15.6,
                    9l54.9,95.7C173.9,121.4,173.7,128.2,170.5,133.9z"
                />
            </g>
        );

        switch (type) {
            case TYPE_LOADING:
                return loading;
            case TYPE_ERROR:
                return error;
            case TYPE_SUCCESS:
                return success;
            default:
                return normal;
        }
    }
}

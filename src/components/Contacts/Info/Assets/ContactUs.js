import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 206,
    height: 192
})

/* eslint-disable react/prefer-stateless-function */
export default class ContactUs extends Component {

    static propTypes = {
        color1: PropTypes.string,
        color2: PropTypes.string
    };

    static defaultProps = {
        color1: '',
        color2: ''
    };

    render() {
        const { color1, color2 } = this.props;

        return (
            <g>
                <g>
                    <path
                        fill={ color2 } d="M91.3,73.7c-1.4,0-2.7-0.9-3.3-2.3c-1.7-4.6-6.3-7.6-11.4-7.6c-5.1,0-9.7,
                        3.1-11.4,7.6c-0.7,1.8-2.7,2.7-4.5,2.1c-1.8-0.7-2.7-2.7-2-4.6c2.7-7.3,9.9-12.2,17.9-12.2c8,0,
                        15.2,4.9,17.9,12.2c0.7,1.8-0.2,3.9-2,4.6C92.1,73.6,91.7,73.7,91.3,73.7z"
                    />
                </g>
                <g>
                    <path
                        fill={ color2 } d="M143.9,73.7c-1.4,0-2.7-0.9-3.3-2.3c-1.7-4.6-6.3-7.6-11.4-7.6s-9.7,3.1-11.4,
                        7.6c-0.7,1.8-2.7,2.7-4.5,2.1c-1.8-0.7-2.7-2.7-2-4.6c2.7-7.3,9.9-12.2,17.9-12.2s15.2,4.9,17.9,
                        12.2c0.7,1.8-0.2,3.9-2,4.6C144.8,73.6,144.4,73.7,143.9,73.7z"
                    />
                </g>
                <g>
                    <path
                        fill={ color2 } d="M103,127.6c-8,0-15.2-4.9-17.9-12.2c-0.7-1.8,0.2-3.9,2-4.6c1.8-0.7,3.8,0.2,
                        4.5,2.1c1.7,4.6,6.3,7.6,11.4,7.6c5.1,0,9.7-3.1,11.4-7.6c0.7-1.8,2.7-2.8,4.5-2.1c1.8,0.7,2.7,2.7,
                        2,4.6C118.2,122.7,111,127.6,103,127.6z"
                    />
                </g>
                <path
                    fill={ color1 } d="M191.7,55.1c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5c4,0,7.3,3.3,7.3,7.4v21.7c0,
                    4.1-3.3,7.4-7.3,7.4h-9c1-5.2,1.6-10.5,
                    1.6-16c0-37.2-24.2-68.7-57.4-79.1c-0.5-0.3-1-0.4-1.5-0.4C118.2,1.2,110.7,0,103,0C58.2,0,21.7,37.1,
                    21.7,82.7v16l-7.5,0c-4,0-7.3-3.3-7.3-7.4V69.6c0-4.1,3.3-7.4,7.3-7.4c1.9,0,3.5-1.6,
                    3.5-3.5s-1.6-3.5-3.5-3.5C6.4,55.1,0,61.6,0,69.6v21.7c0,8,6.4,14.5,14.2,14.5l11,0.1c0.8,0.2,1.8-0.4,
                    2.5-1c0.7-0.7,1-1.6,1-2.5V82.7C28.7,41,62,7.1,103,7.1c5.6,0,11,0.7,16.3,1.9c-6.8,8.7-25.7,28.1-59,
                    26.6c-1.9,0-3.6,1.4-3.6,3.4c-0.1,2,1.4,3.6,3.3,3.7c1.4,0.1,2.7,0.1,4,0.1c37,0,56.9-23.8,
                    62.5-31.7c29.5,10,50.8,38.4,50.8,71.7c0,34.1-22.1,63.5-54,72.7c-2.4-5-7.4-8.5-13.2-8.5h-14c-8.1,
                    0-14.7,6.7-14.7,14.9c0,8.2,6.6,14.9,14.7,14.9h14c7.9,0,14.4-6.5,14.6-14.5c27.6-7.8,48.6-29.4,
                    56.2-56.5h10.7c7.9,0,14.3-6.5,14.3-14.5V69.6C206,61.6,199.6,55.1,191.7,55.1z M110.1,169.8h-14c-4.3,
                    0-7.7-3.5-7.7-7.8s3.5-7.9,7.7-7.9h14c4.3,0,7.7,3.5,7.7,7.9S114.4,169.8,110.1,169.8z"
                />
                <g>
                    <path
                        fill={ color2 } d="M131.5,192h-57c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h57c1.9,0,3.5,1.6,3.5,
                        3.5S133.4,192,131.5,192z"
                    />
                </g>
            </g>
        );
    }
}

import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 236
})

/* eslint-disable react/prefer-stateless-function */
export default class WhyViolence extends Component {
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
                    fill={ color1 } d="M199,
                    189.5c-2.7-3.2-3.7-7.6-2.8-11.7l1.3-5.6c2-8.8-3.4-17.6-12.1-19.7c-5.2-1.2-10.6,0.1-14.6,3.6l-3.8,
                    3.3l-1-1c-2.5-2.5-6.7-2.5-9.2,0l-7,7c-13.8-6.7-30.8-4.3-42.3,7.2c-14.5,14.5-14.5,37.9,0,52.4c14.5,
                    14.5,37.9,14.5,52.3,0c11.4-11.4,13.8-28.5,7.2-42.3l7-7c2.5-2.5,2.5-6.7,
                    0-9.2l-0.9-0.9l3.4-3c1.9-1.7,4.5-2.3,6.9-1.7c4.1,1,6.7,5.2,5.7,9.3l-1.3,5.6c-1.6,6.7,0.1,13.9,4.6,
                    19.2c0.9,1,2.1,1.5,3.3,1.5c1,0,2-0.3,2.8-1C200.3,194,200.5,191.3,199,189.5z M133.7,181c-9.9,0-17.9,
                    8-17.9,17.9c0,2.4-1.9,4.3-4.3,4.3s-4.3-1.9-4.3-4.3c0-14.7,11.9-26.6,26.5-26.6c2.4,0,4.3,1.9,4.3,
                    4.3C138,179.1,136.1,181,133.7,181z"
                />
                <path
                    fill={ color } d="M108.4,142.2l-1.1-5.9c-5.1-28.3-27.9-41-48.2-41c-20.3,0-43.1,12.7-48.2,41L0.1,
                    196.1c0,0.2-0.1,0.4-0.1,0.6c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0,0.4c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0,0.4c0,
                    0.1,0,0.1,0,0.2c0,0.1,0,0.3,0.1,0.4c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.2,0.1,0.4c0,0.1,0,0.1,0.1,0.2c0,
                    0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0.1,
                    0.2,0.2,0.3,0.4c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0.1,0.1,0.2,0.3,0.4,0.4c0,0,0,0,0.1,0.1c0.1,0.1,0.2,
                    0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.2c0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,
                    0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,
                    0.2,0,0.2,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5,0c0,0,0,0,0,
                    0h68.9c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3H11.6l9.7-53.7c1.8-10.1,6.7-18.5,14-24.3c6.6-5.2,
                    15.1-8,23.8-8c8.7,0,17.2,2.9,23.8,8c7.3,5.7,12.1,14.1,14,24.3l1.1,5.9c0.5,2.9,3.3,4.8,6.1,4.3C107,
                    147.8,108.9,145,108.4,142.2z"
                />
                <path
                    fill={ color } d="M40.9,78.3c5.5,3.3,11.8,5,18.2,5s12.7-1.7,18.2-5c13.3-7.9,20.5-23.5,
                    19.8-42.8c-0.4-10.8-4.9-20-12.9-26.5C77.5,3.5,68.6,0.3,59.3,0c-0.1,0-0.1,0-0.2,0h-0.1c-0.1,0-0.1,
                    0-0.2,0c-9.3,0.3-18.2,3.5-24.9,9.1c-8,6.5-12.5,15.7-12.9,26.5C20.3,54.8,27.6,70.4,40.9,78.3z M71.9,
                    69.2c-3.9,2.3-8.3,3.5-12.8,3.5c-4.5,0-8.9-1.2-12.8-3.5c-7.2-4.3-12-11.9-13.8-21.5h53.3C83.9,57.4,
                    79.1,65,71.9,69.2z M38.8,37.6c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2c0,3.4-2.8,
                    6.2-6.2,6.2C41.5,43.8,38.8,41.1,38.8,37.6z M67.7,37.6c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,
                    6.2c0,3.4-2.8,6.2-6.2,6.2C70.5,43.8,67.7,41.1,67.7,37.6z M40.6,17.3c4.9-4,11.6-6.4,18.5-6.7c6.9,
                    0.3,13.6,2.7,18.5,6.7c3.5,2.8,6,6.3,7.4,10.3H33.2C34.7,23.6,37.1,20.1,40.6,17.3z"
                />
                <path
                    fill={ color } d="M66.5,117.4H52.2c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3h14.3c2.9,0,
                    5.3-2.4,5.3-5.3C71.8,119.8,69.4,117.4,66.5,117.4z"
                />
                <path
                    fill={ color } d="M66.5,135H52.2c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3h14.3c2.9,0,5.3-2.4,
                    5.3-5.3C71.8,137.3,69.4,135,66.5,135z"
                />
                <path
                    fill={ color } d="M66.5,152.5H52.2c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3h14.3c2.9,0,
                    5.3-2.4,5.3-5.3C71.8,154.9,69.4,152.5,66.5,152.5z"
                />
                <path
                    fill={ color } d="M66.5,170H52.2c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3h14.3c2.9,0,5.3-2.4,
                    5.3-5.3C71.8,172.4,69.4,170,66.5,170z"
                />
            </g>
        );
    }
}

import React, { Component, PropTypes } from 'react';
import svg, { STATE_HOVER } from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})

/* eslint-disable react/prefer-stateless-function */
export default class Instagram extends Component {

    static propTypes = {
        color: PropTypes.string,
        state: PropTypes.string.isRequired
    };

    static defaultProps = {
        color: ''
    };

    render() {
        const { color, state } = this.props;

        const colorFill = state === STATE_HOVER ? '#fff' : color;

        return (
            <path
                fill={ colorFill } d="M199.5,64.1c-0.1-4.6-0.3-9.3-0.9-13.9c-0.7-5.6-2-11-4.1-16.2
                c-5.4-13.3-14.7-22.7-27.9-28.3c-7.1-3-14.7-4.4-22.4-4.9c-4.5-0.3-9-0.5-13.5-0.6C108.9,0,87-0.2,65.2,0.4
                c-5.1,0.1-10.1,
                0.3-15.2,1c-5.2,0.7-10.2,1.8-15,3.7C20.6,10.7,10.7,20.6,5.1,34.9c-2.7,7-4,14.4-4.4,21.9c-0.3,6.3-0.5,
                12.6-0.6,18.9C0,84.5,0,93.3,0,102.1c0,12.2-0.1,24.4,0.5,36.6c0.2,4.9,0.5,9.9,1.4,14.8c1.1,6,2.8,11.9,
                5.7,17.3c6.5,12.3,16.4,20.6,29.6,25.1c6.4,2.2,13.1,3.2,19.8,3.6c6.3,0.3,12.5,0.6,18.8,0.6c16.7,0.1,33.4,
                0.1,50.1,0c7.2,0,14.4-0.3,21.5-0.9c5.7-0.6,11.3-1.7,16.7-3.7c14.1-5.2,24.1-14.7,30.1-28.4c3.1-7.1,
                4.5-14.6,5-22.3c0.3-5.5,0.6-11,0.6-16.5c0.2-9.3,0.2-18.6,0.3-31.6C199.9,88.1,199.7,76.1,199.5,
                64.1z M99.7,151.4c-28.2-0.1-51.2-23.2-51.1-51.5c0.1-28.7,23.5-51.2,51.4-51.2c28.1,0.1,51.3,23,51.2,
                51.4C151.2,128.6,128.2,151.5,99.7,151.4z M153.3,58.7c-6.6,0-12-5.5-12-12.1c0.1-6.6,5.4-11.9,12-11.9c6.7,
                0,12,5.3,12,12C165.3,53.3,159.9,58.7,153.3,58.7z"
            />
        );
    }
}

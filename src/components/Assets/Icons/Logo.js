import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 64
})

// TODO почистить код и разобраться, почему криво отображает SVG
/* eslint-disable */
export default class Top extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <polygon fill={ color } points="99.1,49 101.6,49 101.6,55.1 102.3,55.1 102.3,49 104.8,49 104.8,48.5 99.1,48.5 	"/>
                <path fill={ color } d="M108.8,48.3c-0.8,0-1.5,0.3-2.2,1c-0.6,0.6-0.9,1.5-0.9,2.5c0,1.1,0.3,1.9,0.9,2.5c0.6,0.6,1.4,0.9,2.3,0.9
		c0.7,0,1.5-0.2,2.2-0.7l-0.3-0.5c-0.6,0.4-1.2,0.6-1.9,0.6c-0.8,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.7-1.2-0.8-2.1h5.1c0-0.1,0-0.3,0-0.5
		c0-1-0.2-1.7-0.7-2.3C110.3,48.6,109.6,48.3,108.8,48.3z M106.4,51.4c0.1-0.8,0.3-1.4,0.8-1.9c0.5-0.5,1-0.7,1.6-0.7
		c0.7,0,1.2,0.2,1.5,0.7c0.4,0.4,0.6,1.1,0.6,1.9H106.4z"/>
                <path fill={ color } d="M114.2,49.9c-0.1,0.5-0.1,1.1-0.2,1.7c-0.1,0.6-0.1,1.1-0.2,1.4c-0.1,1.1-0.5,1.7-1,1.7c-0.1,0-0.2,0-0.3-0.1
		l-0.1,0.6c0.1,0.1,0.3,0.1,0.5,0.1c0.9,0,1.4-0.7,1.6-2.2c0.1-0.7,0.3-2.1,0.5-4.1h2.6v6.1h0.7v-6.7h-3.8
		C114.3,48.9,114.2,49.4,114.2,49.9z"/>
                <path fill={ color } d="M123.4,48.3c-0.8,0-1.5,0.3-2.2,1c-0.6,0.6-0.9,1.5-0.9,2.5c0,1.1,0.3,1.9,0.9,2.5c0.6,0.6,1.4,0.9,2.3,0.9
		c0.7,0,1.5-0.2,2.2-0.7l-0.3-0.5c-0.6,0.4-1.2,0.6-1.9,0.6c-0.8,0-1.4-0.3-1.9-0.8c-0.5-0.5-0.7-1.2-0.8-2.1h5.1c0-0.1,0-0.3,0-0.5
		c0-1-0.2-1.7-0.7-2.3C124.9,48.6,124.2,48.3,123.4,48.3z M121,51.4c0.1-0.8,0.3-1.4,0.8-1.9c0.5-0.5,1-0.7,1.6-0.7
		c0.7,0,1.2,0.2,1.5,0.7c0.4,0.4,0.6,1.1,0.6,1.9H121z"/>
                <path fill={ color } d="M131.7,50c0.2-0.4,0.4-0.7,0.5-0.8c0.2-0.1,0.4-0.2,0.6-0.2c0.1,0,0.2,0,0.2,0l0.1-0.6c-0.1,0-0.2-0.1-0.3-0.1
		c-0.3,0-0.6,0.1-0.9,0.3c-0.3,0.2-0.5,0.6-0.7,1.1l-0.7,1.6h-1.8v-2.9H128v6.7h0.7v-3.2h1.8l2.2,3.2h0.7l-2.4-3.5L131.7,50z"/>
                <path fill={ color } d="M137.3,48.3c-0.9,0-1.8,0.3-2.6,0.9l0.3,0.5c0.8-0.5,1.5-0.8,2.3-0.8c1.1,0,1.7,0.7,1.7,2.1
		c-1.6,0.2-2.8,0.4-3.5,0.8c-0.7,0.4-1.1,0.9-1.1,1.7c0,0.6,0.2,1.1,0.6,1.4c0.4,0.3,0.9,0.5,1.5,0.5c0.8,0,1.6-0.3,2.5-1h0l0.1,0.9
		h0.6v-4.3c0-0.8-0.2-1.4-0.5-1.9C138.7,48.5,138.1,48.3,137.3,48.3z M138.9,53.7c-0.9,0.7-1.7,1.1-2.4,1.1c-0.4,0-0.8-0.1-1.1-0.3
		c-0.3-0.2-0.4-0.6-0.4-1c0-0.5,0.3-1,0.9-1.3c0.6-0.3,1.6-0.6,3-0.7V53.7z"/>
                <polygon fill={ color } points="146.8,51.4 142.7,51.4 142.7,48.5 142.1,48.5 142.1,55.1 142.7,55.1 142.7,51.9 146.8,51.9
		146.8,55.1 147.5,55.1 147.5,48.5 146.8,48.5 	"/>
                <path fill={ color } d="M152.7,48.3c-0.9,0-1.8,0.3-2.6,0.9l0.3,0.5c0.8-0.5,1.5-0.8,2.3-0.8c1.1,0,1.7,0.7,1.7,2.1
		c-1.6,0.2-2.8,0.4-3.5,0.8c-0.7,0.4-1.1,0.9-1.1,1.7c0,0.6,0.2,1.1,0.6,1.4c0.4,0.3,0.9,0.5,1.5,0.5c0.8,0,1.6-0.3,2.5-1h0l0.1,0.9
		h0.6v-4.3c0-0.8-0.2-1.4-0.5-1.9C154.1,48.5,153.5,48.3,152.7,48.3z M154.3,53.7c-0.9,0.7-1.7,1.1-2.4,1.1c-0.4,0-0.8-0.1-1.1-0.3
		c-0.3-0.2-0.4-0.6-0.4-1c0-0.5,0.3-1,0.9-1.3c0.6-0.3,1.6-0.6,3-0.7V53.7z"/>
                <path fill={ color } d="M158.2,49.9c-0.1,0.5-0.1,1.1-0.2,1.7c-0.1,0.6-0.1,1.1-0.2,1.4c-0.1,1.1-0.5,1.7-1,1.7c-0.1,0-0.2,0-0.3-0.1
		l-0.1,0.6c0.1,0.1,0.3,0.1,0.5,0.1c0.9,0,1.4-0.7,1.6-2.2c0.1-0.7,0.3-2.1,0.5-4.1h2.6v6.1h0.7v-6.7h-3.8
		C158.3,48.9,158.3,49.4,158.2,49.9z"/>
                <polygon fill={ color } points="173.9,50 168.7,50 168.7,46 168,46 168,55.1 168.7,55.1 168.7,50.6 173.9,50.6 173.9,55.1 174.5,55.1
		174.5,46 173.9,46 	"/>
                <path fill={ color } d="M179.8,48.3c-0.9,0-1.8,0.3-2.6,0.9l0.3,0.5c0.8-0.5,1.5-0.8,2.3-0.8c1.1,0,1.7,0.7,1.7,2.1
		c-1.6,0.2-2.8,0.4-3.5,0.8c-0.7,0.4-1.1,0.9-1.1,1.7c0,0.6,0.2,1.1,0.6,1.4c0.4,0.3,0.9,0.5,1.5,0.5c0.8,0,1.6-0.3,2.5-1h0l0.1,0.9
		h0.6v-4.3c0-0.8-0.2-1.4-0.5-1.9C181.2,48.5,180.6,48.3,179.8,48.3z M181.4,53.7c-0.9,0.7-1.7,1.1-2.4,1.1c-0.4,0-0.8-0.1-1.1-0.3
		c-0.3-0.2-0.4-0.6-0.4-1c0-0.5,0.3-1,0.9-1.3c0.6-0.3,1.6-0.6,3-0.7V53.7z"/>
                <path fill={ color } d="M189.3,48.5h-3.9l-0.4,3.1c-0.1,1.1-0.3,1.8-0.5,2.2c-0.2,0.4-0.4,0.7-0.6,0.8h-0.2h-0.1V55l0.1,2.6h0.6v-2.4
		h0.5h3.9h0.7h0.3v2.4h0.6l0.1-2.6v-0.4h-1V48.5z M188.6,54.6h-3.9c0.4-0.5,0.7-1.5,0.9-2.9l0.3-2.7h2.7V54.6z"/>
                <rect fill={ color } x="192" y="48.5" width="0.7" height="6.7"/>
                <path fill={ color } d="M192.3,45.8c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.4,0.2
		c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4C192.7,45.8,192.5,45.8,192.3,45.8z"/>
                <path fill={ color } d="M197.8,48.5c-1.8,0-2.7,0.6-2.7,1.8c0,0.5,0.2,1,0.5,1.3c0.3,0.3,0.8,0.5,1.4,0.6l-2.4,3h0.8l2.3-2.9h0h1.6
		v2.9h0.7v-6.7H197.8z M199.3,51.7H198c-0.7,0-1.2-0.1-1.6-0.4c-0.4-0.2-0.6-0.6-0.6-1c0-0.9,0.7-1.3,2.2-1.3h1.4V51.7z"/>
                <polygon fill={ color } points="107.9,29.2 115.7,29.2 115.7,37.1 117.9,37.1 117.9,20.3 115.7,20.3 115.7,27.3 107.9,27.3
		107.9,20.3 105.8,20.3 105.8,37.1 107.9,37.1 	"/>
                <path fill={ color } d="M132.1,30.9c0-2-0.6-3.6-1.7-4.8c-1.1-1.2-2.5-1.8-4.1-1.8c-1.6,0-3,0.6-4.1,1.8c-1.1,1.2-1.7,2.8-1.7,4.8
		c0,2,0.6,3.6,1.7,4.7c1.1,1.2,2.5,1.8,4.1,1.8c1.6,0,3-0.6,4.1-1.8C131.5,34.5,132.1,32.9,132.1,30.9z M128.9,34.3
		c-0.7,0.9-1.5,1.3-2.6,1.3c-1.1,0-1.9-0.4-2.6-1.3c-0.7-0.9-1-2-1-3.4c0-1.4,0.3-2.6,1-3.5c0.7-0.9,1.5-1.3,2.6-1.3
		c1.1,0,1.9,0.4,2.6,1.3c0.7,0.9,1,2.1,1,3.5C129.9,32.3,129.6,33.5,128.9,34.3z"/>
                <path fill={ color } d="M143.9,35.6c1.1-1.2,1.6-2.8,1.6-4.9c0-2-0.4-3.5-1.3-4.7c-0.9-1.1-2.1-1.7-3.6-1.7c-1.3,0-2.6,0.6-4,1.7h-0.1
		l-0.2-1.4h-1.7v17.2h2.1v-3.7l-0.1-2.2c1.2,1,2.4,1.4,3.5,1.4C141.6,37.4,142.8,36.8,143.9,35.6z M142.3,34.3
		c-0.7,0.9-1.5,1.3-2.6,1.3c-1,0-2-0.4-3.1-1.3v-6.5c1.3-1.1,2.4-1.7,3.3-1.7c2.2,0,3.3,1.5,3.3,4.6C143.3,32.2,143,33.4,142.3,34.3
		z"/>
                <path fill={ color } d="M157.2,36.1l-0.7-1.4c-1,0.6-2,1-3.1,1c-1.2,0-2.2-0.4-2.9-1.2c-0.7-0.8-1.2-1.8-1.2-3.2h8.4
		c0.1-0.3,0.1-0.7,0.1-1.2c0-1.8-0.4-3.2-1.3-4.3c-0.9-1.1-2.1-1.6-3.7-1.6c-1.5,0-2.8,0.6-3.9,1.8c-1.1,1.2-1.7,2.8-1.7,4.7
		c0,2,0.6,3.6,1.7,4.7s2.6,1.8,4.3,1.8C154.5,37.4,155.8,37,157.2,36.1z M150.3,27c0.7-0.7,1.5-1,2.4-1c1,0,1.7,0.3,2.3,1
		c0.5,0.7,0.8,1.6,0.8,2.9h-6.7C149.3,28.7,149.7,27.7,150.3,27z"/>
                <path fill={ color } d="M161.8,34.2c-0.4,0-0.8,0.2-1.1,0.5c-0.3,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.8,0.4,1.1c0.3,0.3,0.7,0.4,1.1,0.4
		c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.4-0.7,0.4-1.1c0-0.5-0.1-0.9-0.4-1.2C162.6,34.3,162.2,34.2,161.8,34.2z"/>
                <path fill={ color } d="M177.6,20.4h-3.6v9.4c0,1.6-0.2,2.7-0.7,3.4c-0.5,0.7-1.2,1-2.2,1c-1,0-1.7-0.3-2.2-1
		c-0.5-0.7-0.7-1.8-0.7-3.4v-9.4h-3.8v9c0,5.4,2.2,8,6.7,8c2.2,0,3.8-0.6,4.9-1.9c1.1-1.3,1.7-3.3,1.7-6.1V20.4z"/>
                <path fill={ color } d="M183.5,20.4l-5.2,16.7h3.8l1-4h5.1l1,4h4L188,20.4H183.5z M183.9,30.2l0.4-1.5c0.2-0.9,0.7-2.7,1.3-5.4h0.1
		c0.8,3.3,1.3,5.1,1.4,5.4l0.4,1.5H183.9z"/>
                <path fill={ color } d="M77.5,1.5C76.4,0.6,75,0,73.1,0L4.5,0c0,0-5.7-0.3-4.3,5.7l11.7,53.4c0,0,1.3,6,6.9,4.8l12.8-3.8l0.1-0.7
		c0.8-10.1-0.1-12.9-1.2-17.9C28.3,32,15.8,17.9,14.6,16.9c-1.1-1-1.5-3.3,2.5-1.3c16.6,8.3,28,23.6,29,23.5
		c1.6-0.1,21.9-27.9,30-36.5C76.7,2.2,77.1,1.8,77.5,1.5z M45.5,30.5c-6.2,0-11.1-5.1-11.1-11.3c0-6.2,5-11.3,11.2-11.3
		c6.2,0,11.1,5.1,11.1,11.3C56.7,25.5,51.7,30.5,45.5,30.5z"/>
                <path fill={ color } d="M80.6,6.2c0,0-0.3-1-1-2.2C69.4,24.2,63.3,37.6,62.2,51l25-7.4c0,0,5.6-1.2,3.8-7.1L80.6,6.2z"/>
            </g>
        );
    }
}
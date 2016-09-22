import React, { Component } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 378
})
export default class Arrow extends Component {
    render() {
        console.log(this.props.color);
        const { color } = this.props;

        return (
            <path fill={ color } d="M18,3.1C13.9-1,7.2-1,3.1,3.1C-1,7.2-1,13.9,3.1,18l171.4,171L3.1,360c-4.1,4.1-4.1,10.8,0,14.9
	              c4.1,4.1,10.8,4.1,15,0l178.9-178.5c2.1-2.1,3.1-4.8,3.1-7.5s-1-5.4-3.1-7.5L18,3.1z"/>
        );
    }
}

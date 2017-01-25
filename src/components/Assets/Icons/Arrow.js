import React, { Component, PropTypes } from 'react';
import svg, { STATE_HOVER, STATE_ACTIVE } from 'helpers/svg';

@svg({
    width: 200,
    height: 378
})

/* eslint-disable react/prefer-stateless-function */
export default class Arrow extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        hoverColor: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        isStatic: PropTypes.bool
    };

    static defaultProps = {
        isStatic: true
    };

    render() {
        const { color, state, hoverColor, isStatic } = this.props;

        const params = isStatic ? {
            fill: color,
            opacity: 1
        } : {
            fill: state === STATE_HOVER || state === STATE_ACTIVE ? hoverColor : color,
            opacity: state === STATE_ACTIVE ? 0.8 : 1
        };

        return (
            <path
                { ...params }
                d="M18,3.1C13.9-1,7.2-1,3.1,3.1C-1,7.2-1,13.9,3.1,
                    18l171.4,171L3.1,360c-4.1,4.1-4.1,10.8,0,14.9c4.1,4.1,10.8,4.1,15,0l178.9-178.5c2.1-2.1,3.1-4.8,
                    3.1-7.5s-1-5.4-3.1-7.5L18,3.1z"
            />
        );
    }
}

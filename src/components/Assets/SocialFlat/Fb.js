import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 425
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
            <path
                fill={ color } d="M44.3,81.8c0,10.7,0.4,63.1,0.4,63.1H-0.1V212l44.4-0.1l0.4,212.6h89.6V212l57.4-0.1c0,0,
                4.3-29.5,7-67c-7.7,0-64.4,0-64.4,0s-1.5-46.5-1.5-53.8c0-7.3,9.6-17.1,19.1-17.1c9.5,0,29.5,0,48,0c0-9.7,
                0-43.4,0-74.5c-24.7,0-52.9,0-65.3,0C42.2-0.5,44.3,71.1,44.3,81.8z"
            />
        );
    }
}

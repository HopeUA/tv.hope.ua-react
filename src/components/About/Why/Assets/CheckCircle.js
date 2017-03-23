import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})
export default class CheckCircle extends Component {
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
                    fill={ color } d="M59,81L45,95l45,45L190,40l-14-14l-86,86L59,81z"
                />
                <path
                    fill={ color1 } d="M180,100c0,44-36,80-80,80s-80-36-80-80s36-80,80-80c8,0,15,1,22,
                    3l16-16c-12-4-25-7-38-7C45,0,0,45,0,100s45,100,100,100s100-45,100-100H180z"
                />
            </g>
        );
    }
}

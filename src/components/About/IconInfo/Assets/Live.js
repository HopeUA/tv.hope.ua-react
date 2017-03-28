import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})
export default class Live extends Component {
    static propTypes = {
        color: PropTypes.string,
        color1: PropTypes.string,
        color2: PropTypes.string
    };

    static defaultProps = {
        color: '',
        color1: '',
        color2: ''
    };

    render() {
        const { color, color1, color2 } = this.props;

        const style = {
            fontStyle: 'normal',
            fontFamily: 'PTSans-Bold',
            fontSize: '42px'
        };

        return (
            <g>
                <path
                    fill={ color } d="M158,66H42c-3.3,0-6,2.7-6,6v56c0,3.3,2.7,6,6,6h116c3.3,0,6-2.7,6-6V72C164,68.7,
                    161.3,66,158,66z"
                />
                <path
                    fill={ color1 } d="M100,200C44.9,200,0,155.1,0,100C0,45,44.8,0.2,99.8,0h0.1c43.9,0,82.2,28.1,95.4,
                    69.9c3,9.5,4.6,19.9,4.6,30.1C200,155.1,155.1,200,100,200z M99.9,3.6l0,3.6C48.8,7.3,7.2,49,7.2,
                    100c0,51.2,41.6,92.8,92.8,92.8c51.2,0,92.8-41.6,92.8-92.8c0-9.4-1.5-19.1-4.3-27.9C176.3,33.3,140.7,
                    7.2,100,7.2L99.9,3.6z"
                />
                <text
                    transform="matrix(1 0 0 1 59.6179 113.1169)"
                    style={ style }
                    fill={ color2 }
                >
                    LIVE
                </text>
            </g>
        );
    }
}

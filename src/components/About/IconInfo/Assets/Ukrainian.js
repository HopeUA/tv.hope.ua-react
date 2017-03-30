import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 200,
    height: 200
})
export default class Ukrainian extends Component {
    static propTypes = {
        color: PropTypes.string,
        color1: PropTypes.string,
        color2: PropTypes.string,
        color3: PropTypes.string,
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        color: '',
        color1: '',
        color2: '',
        color3: ''
    };

    render() {
        const { color, color1, color2, color3, text } = this.props;

        const style1 = {
            fontStyle: 'normal',
            fontFamily: 'PTSans-Bold',
            fontSize: '48px'
        };

        const style2 = {
            fontStyle: 'normal',
            fontFamily: 'PTSans-Regular',
            fontSize: '30px'
        };

        return (
            <g>
                <path
                    fill={ color } d="M188.5,72.1C176.3,33.3,140.7,7.2,100,7.2L99.9,0h0.1c43.9,0,82.2,28.1,95.4,
                    69.9L188.5,72.1z"
                />
                <path
                    fill={ color1 } d="M100,200C44.9,200,0,155.1,0,100C0,45,44.8,0.2,99.8,0h0c2,0,3.6,1.6,3.6,3.6c0,
                    2-1.6,3.6-3.6,3.6C48.8,7.3,7.2,49,7.2,100c0,51.2,41.6,92.8,92.8,92.8c51.2,0,92.8-41.6,
                    92.8-92.8c0-9.4-1.5-19.1-4.3-27.9c-0.6-1.9,0.4-3.9,2.3-4.5c1.9-0.6,3.9,0.4,4.5,2.3c3,9.5,4.6,19.9,
                    4.6,30.1C200,155.1,155.1,200,100,200z"
                />
                <text
                    transform="matrix(1 0 0 1 52.6248 98.7251)"
                >
                    <tspan
                        x="0"
                        y="0"
                        fill={ color2 }
                        style={ style1 }
                    >
                        80%
                    </tspan>
                    <tspan
                        x="-16.3"
                        y="36"
                        fill={ color3 }
                        style={ style2 }
                    >
                        { text }
                    </tspan>
                </text>
            </g>
        );
    }
}

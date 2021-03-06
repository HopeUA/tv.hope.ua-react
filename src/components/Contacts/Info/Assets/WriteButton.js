import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 50,
    height: 50
})

/* eslint-disable react/prefer-stateless-function */
export default class WriteButton extends Component {

    static propTypes = {
        color: PropTypes.string
    };

    static defaultProps = {
        color: ''
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <g>
                    <g>
                        <path
                            fill={ color } d="M2.4,50c-0.6,0-1.2-0.2-1.7-0.7c-0.6-0.6-0.8-1.4-0.7-2.2c0,0,0-0.1,
                            0-0.1l3.2-9.8c0.1-0.4,0.5-0.7,0.9-0.8c0.4-0.1,0.9,0,1.2,0.3l8,8c0.3,0.3,0.4,0.7,0.3,
                            1.2c-0.1,0.4-0.4,0.8-0.8,0.9L3,49.9c0,0-0.1,0-0.1,0C2.8,50,2.6,50,2.4,50zM5,39.8l-2.5,
                            7.7l7.6-2.5L5,39.8z M16.5,42.7C16.5,42.7,16.5,42.7,16.5,42.7c-0.3,
                            0-0.6-0.1-0.9-0.4l-8-8c-0.5-0.5-0.5-1.3,0-1.7L31.1,9c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,
                            0.6,0.1,0.9,0.4l8,8c0.5,0.5,0.5,1.3,0,1.7L17.4,42.3C17.1,42.5,16.8,42.7,16.5,42.7z M10.3,
                            33.5l6.2,6.2l21.7-21.8L32,11.7L10.3,33.5z M43.9,15.2c-0.3,0-0.6-0.1-0.9-0.4l-8-8
                            c-0.5-0.5-0.5-1.3,0-1.7l3.2-3.3C39.5,0.7,40.8,0,42.2,0c0,0,0,0,0,0c1.3,0,2.5,0.5,3.5,
                            1.6l2.8,2.8l0,0c1.9,1.9,2,4.7,0.2,6.4l-4,4C44.5,15,44.2,15.2,43.9,15.2z M37.7,6l6.2,6.2L47,
                            9.1c0.9-0.9,0.6-2.2-0.2-2.9L44,3.4c-0.6-0.6-1.2-0.8-1.8-0.8h0c-0.7,0-1.5,0.4-2.2,1.1L37.7,
                            6z"
                        />
                    </g>
                </g>
                <g>
                    <path
                        fill={ color } d="M1.2,25C0.6,25,0,24.4,0,23.7V10.1C0,4.7,5,0,10.7,0h14.3c0.7,0,1.2,0.6,1.2,
                        1.2s-0.6,1.2-1.2,1.2H10.7c-4.4,0-8.2,3.6-8.2,7.6v13.7C2.5,24.4,1.9,25,1.2,25z"
                    />
                </g>
                <g>
                    <path
                        fill={ color } d="M40.3,50H24.5c-0.7,0-1.2-0.6-1.2-1.2c0-0.7,0.6-1.2,1.2-1.2h15.7c4.3,0,7.3-2.7,
                        7.3-6.7V25.5c0-0.7,0.6-1.2,1.2-1.2c0.7,0,1.2,0.6,1.2,1.2v15.4C50,46.2,46,50,40.3,50z"
                    />
                </g>
            </g>
        );
    }
}

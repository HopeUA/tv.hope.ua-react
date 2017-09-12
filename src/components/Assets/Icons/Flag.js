import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 56,
    height: 56
})

/* eslint-disable react/prefer-stateless-function */
export default class Flag extends Component {
    static propTypes = {
        language: PropTypes.string
    };
    /* eslint-disable */

    static defaultProps = {
        language: ''
    };

    render() {
        const { language } = this.props;

        let flag;

        if (language === 'ru') {
            flag = (
                <g>
                    <path fill="#F6F6F6" d="M54.4,18.7H1.6C5.4,7.8,15.8,0,28,0S50.6,7.8,54.4,18.7z"/>
                    <path
                        fill="#0AA5C9" d="M56,28c0,3.3-0.6,6.4-1.6,9.3H1.6C0.6,34.4,0,31.3,0,28s0.6-6.4,1.6-9.3h52.8C55.4,
                    21.6,56,24.7,56,28z"
                    />
                    <path fill="#F1766E" d="M54.4,37.3C50.6,48.2,40.2,56,28,56S5.4,48.2,1.6,37.3H54.4z"/>
                </g>
            );
        } else if (language === 'uk') {
            flag = (
                <g>
                    <path fill="#0AB6CC" d="M28,0C12.5,0,0,12.5,0,28h56C56,12.5,43.5,0,28,0z"/>
                    <path fill="#FFDA42" d="M28,56c15.5,0,28-12.5,28-28H0C0,43.5,12.5,56,28,56z"/>
                </g>
            );
        } else if (language === 'usa'){
            flag = (
                <g>
                    <circle fill="#FFFFFF" cx="28" cy="28" r="27.6"/>
                    <path fill="#DD4E43" d="M5.6,11.2h44.8C45.3,4.4,37.2,0,28,0S10.7,4.4,5.6,11.2z"/>
                    <path
                        fill="#DD4E43" d="M0.6,22.4C0.2,24.2,0,26.1,0,28s0.2,3.8,0.6,5.6h54.9c0.4-1.8,0.6-3.7,
                        0.6-5.6s-0.2-3.8-0.6-5.6H0.6z"
                    />
                    <path
                        fill="#3172B9" d="M33.6,33.6v-33C31.8,0.2,29.9,0,28,0C12.5,0,0,12.5,0,28c0,1.9,0.2,3.8,0.6,
                        5.6H33.6z"
                    />
                    <path fill="#DD4E43" d="M50.4,44.8H5.6C10.7,51.6,18.8,56,28,56S45.3,51.6,50.4,44.8z"/>
                    <g>
                        <polygon
                            fill="#FFFFFF" points="6.1,25.3 7,27.1 8.8,27.4 7.5,28.7 7.8,30.7 6.1,29.8 4.5,30.7 4.8,
                            28.7 3.5,27.4 5.3,27.1 	"
                        />
                        <polygon
                            fill="#FFFFFF" points="16.8,25.3 17.6,27.1 19.5,27.4 18.1,28.7 18.4,30.7 16.8,
                            29.8 15.2,30.7 15.5,28.7 14.1,27.4 16,27.1"
                        />
                        <polygon
                            fill="#FFFFFF" points="27.5,25.3 28.3,27.1 30.1,27.4 28.8,28.7 29.1,30.7 27.5,29.8 25.8,
                            30.7 26.1,28.7 24.8,27.4 26.6,27.1 	"
                        />
                    </g>
                    <g>
                        <polygon
                            fill="#FFFFFF" points="16.8,2.9 17.6,4.7 19.5,5 18.1,6.3 18.4,8.3 16.8,7.4 15.2,
                            8.3 15.5,6.3 14.1,5 16,4.7 	"
                        />
                        <polygon
                            fill="#FFFFFF" points="27.5,2.9 28.3,4.7 30.1,5 28.8,6.3 29.1,8.3 27.5,7.4 25.8,
                            8.3 26.1,6.3 24.8,5 26.6,4.7 	"
                        />
                    </g>
                    <g>
                        <polygon
                            fill="#FFFFFF" points="6.1,14.1 7,15.9 8.8,16.2 7.5,17.5 7.8,19.5 6.1,18.6 4.5,19.5 4.8,
                            17.5 3.5,16.2 5.3,15.9 	"
                        />
                        <polygon
                            fill="#FFFFFF" points="16.8,14.1 17.6,15.9 19.5,16.2 18.1,17.5 18.4,19.5 16.8,18.6 15.2,
                            19.5 15.5,17.5 14.1,16.2 16,15.9"
                        />
                        <polygon
                            fill="#FFFFFF" points="27.5,14.1 28.3,15.9 30.1,16.2 28.8,17.5 29.1,19.5 27.5,18.6 25.8,
                            19.5 26.1,17.5 24.8,16.2 26.6,15.9 	"
                        />
                    </g>
                </g>
            );
        }

        return flag;
    }
}


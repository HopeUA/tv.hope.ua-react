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

    static defaultProps = {
        language: ''
    };

    render() {
        const { language } = this.props;

        return language === 'ru' ? (
            <g>
                <path fill="#F6F6F6" d="M54.4,18.7H1.6C5.4,7.8,15.8,0,28,0S50.6,7.8,54.4,18.7z"/>
                <path
                    fill="#0AA5C9" d="M56,28c0,3.3-0.6,6.4-1.6,9.3H1.6C0.6,34.4,0,31.3,0,28s0.6-6.4,1.6-9.3h52.8C55.4,
                    21.6,56,24.7,56,28z"
                />
                <path fill="#F1766E" d="M54.4,37.3C50.6,48.2,40.2,56,28,56S5.4,48.2,1.6,37.3H54.4z"/>
            </g>
            ) : (
                <g>
                    <path fill="#0AB6CC" d="M28,0C12.5,0,0,12.5,0,28h56C56,12.5,43.5,0,28,0z"/>
                    <path fill="#FFDA42" d="M28,56c15.5,0,28-12.5,28-28H0C0,43.5,12.5,56,28,56z"/>
                </g>
            );
    }
}


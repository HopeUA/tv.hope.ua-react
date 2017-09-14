import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 210,
    height: 210
})

/* eslint-disable react/prefer-stateless-function */
export default class Flag extends Component {
    static propTypes = {
        language: PropTypes.string.isRequired
    };
    /* eslint-disable */

    render() {
        const { language } = this.props;

        let content = (<g/>);

        switch (language) {
            case 'uk':
                content = (
                    <g>
                        <path fill="#0AB6CC" d="M28,0C12.5,0,0,12.5,0,28h56C56,12.5,43.5,0,28,0z"/>
                        <path fill="#FFDA42" d="M28,56c15.5,0,28-12.5,28-28H0C0,43.5,12.5,56,28,56z"/>
                    </g>
                );
                break;
            case 'ru':
                content = (
                    <g></g>
                );
                break;
            case 'en':
                break;
            case 'pl':
                break;
            case 'es':
                break;
            case 'ro':
                break;
            case 'fa':
                break;
        }

        return content;
    }
}


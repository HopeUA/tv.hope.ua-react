import React, { Component } from 'react';

const svg = (Component, { width = 0, height = 0} = {}) => {
    return class Svg extends Component {
        render() {
            const { className } = this.props;
            const rootStyle = {
                display: 'block',
                lineHeight: 0
            };

            return (
                <i style={ rootStyle } className={ className }>
                    <svg version="1.1" viewBox={ `0 0 ${width} ${height}` }>
                        <Component { ...this.props }/>
                    </svg>
                </i>
            );
        }
    }
};

export default (params) => {
    return (Component) => svg(Component, params);
}

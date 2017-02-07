import React, { PropTypes } from 'react';

export const STATE_NORMAL = 'normal';
export const STATE_HOVER = 'hover';
export const STATE_ACTIVE = 'active';

/* eslint-disable react/prefer-stateless-function */
const svg = (Component, { width = 0, height = 0 } = {}) => {
    return class Svg extends Component {
        static propTypes = {
            className: PropTypes.any,
            onClick: PropTypes.func
        };

        static defaultProps = {
            className: null,
            onClick: () => { return null; }
        };

        state = {
            state: STATE_NORMAL
        };

        onMouseEnter = () => {
            this.setState({
                state: STATE_HOVER
            });
        };
        onMouseLeave = () => {
            this.setState({
                state: STATE_NORMAL
            });
        };
        onMouseDown = () => {
            this.setState({
                state: STATE_ACTIVE
            });
        };
        onMouseUp = () => {
            this.setState({
                state: STATE_HOVER
            });
        };

        render() {
            const { className, onClick } = this.props;
            const rootStyle = {
                display: 'block',
                lineHeight: 0
            };
            const componentProps = Object.assign(
                {},
                this.props,
                { state: this.state.state }
            );

            return (
                <i
                    style={ rootStyle }
                    className={ className }
                    onMouseEnter={ this.onMouseEnter }
                    onMouseLeave={ this.onMouseLeave }
                    onMouseDown={ this.onMouseDown }
                    onMouseUp={ this.onMouseUp }
                    onClick={ onClick }
                >
                    <svg version="1.1" viewBox={ `0 0 ${width} ${height}` }>
                        <Component { ...componentProps }/>
                    </svg>
                </i>
            );
        }
    };
};

export default (params) => {
    return (Component) => svg(Component, params);
};

import React, { Component, PropTypes } from 'react';

export default class Dot extends Component {
    static propTypes = {
        className: PropTypes.string,
        index: PropTypes.number.isRequired,
        onClick: PropTypes.func
    };

    _onClick = () => {
        this.props.onClick(this.props.index);
    };

    render() {
        return (
            <span
                onClick={ this._onClick }
                className={ this.props.className }
            />
        );
    }
}

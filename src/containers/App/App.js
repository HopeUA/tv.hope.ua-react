import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from 'config';
import Helmet from 'react-helmet';
import disableHoverOnTouch from 'helpers/disableHoverOnTouch';
import Styles from './main.scss'; // eslint-disable-line no-unused-vars

@connect(
    (state) => state
)
export default class App extends Component {
    static propTypes = {
        children: PropTypes.object
    };

    static defaultProps = {
        children: null
    };

    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    componentDidMount = () => {
        disableHoverOnTouch();
    };

    render() {
        return (
            <div>
                <Helmet { ...config.app.head }/>
                { this.props.children }
            </div>
        );
    }
}

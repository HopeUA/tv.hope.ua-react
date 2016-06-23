import React, { Component, PropTypes } from 'react';

export default class Parallax extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired
    };
    
    componentDidMount = () => {
        $(document).ready(function () {
            $('.'+Styles.container).parallax();
        });
    };

    render() {
        const { src } = this.props;

        return(
            <img src={ src }/>
        );
    }
}

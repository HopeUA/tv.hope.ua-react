import React, { PropTypes, Component } from 'react';
import Form from './Views/Desktop';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Fetch from 'isomorphic-fetch';

export const STATE_NORMAL = 'normal';
export const STATE_LOADING = 'loading';
export const STATE_ERROR = 'error';
export const STATE_SUCCESS = 'success';

export default class extends Component {
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    state = {
        name: '',
        email: '',
        message: '',
        form: STATE_NORMAL
    };

    handleChange = (event) => {
        const el = event.target;
        this.setState({
            [el.name]: el.value
        });
    };

    handleSubmit = async (event) => { // eslint-disable-line arrow-parens
        const form = event.target.parentNode;

        if (this.state.form !== STATE_NORMAL || !form.checkValidity()) {
            return;
        }

        this.setState({
            form: STATE_LOADING
        });

        const response = await Fetch('https://tv.hope.ua/pray.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });

        if (response.status === 200) {
            this.setState({
                form: STATE_SUCCESS
            });
        } else {
            this.setState({
                form: STATE_ERROR
            });
        }
    };

    handleDefaultSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        const { mediaType } = this.props;

        return [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(mediaType) !== -1 ? null : (
            <Form
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
                handleDefaultSubmit={ this.handleDefaultSubmit }
                state={ this.state.form }
                { ...this.state }
            />
        );
    }
}

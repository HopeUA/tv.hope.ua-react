/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import Fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';

/**
 * [IV]
 * View Import
 */
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

export const STATE_NORMAL = 'normal';
export const STATE_LOADING = 'loading';
export const STATE_ERROR = 'error';
export const STATE_SUCCESS = 'success';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Form extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CDP]
     * Component default props
     */
    static defaultProps = {
        canRefresh: false,
        scrollDisable: false
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;

    /**
     * [CIS]
     * Internal state (optional)
     */
    state = {
        name: '',
        email: '',
        message: '',
        form: STATE_NORMAL
    };

    /**
     * [CHM-HM]
     * JSDoc for every helper method
     */
    handleChange = (event) => {
        const el = event.target;
        this.setState({
            [el.name]: el.value
        });
    };

    handleSubmit = async (event) => { // eslint-disable-line arrow-parentheses
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

    /**
     * [CR]
     * Render function
     */
    render = () => {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType } = this.props;

        /**
         * [RV]
         * View
         */
        const view = BP.isMobile(mediaType) ? null : (
            <Desktop
                handleChange={ this.handleChange }
                handleSubmit={ this.handleSubmit }
                handleDefaultSubmit={ this.handleDefaultSubmit }
                state={ this.state.form }
                { ...this.state }
            />
        );

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default Form;

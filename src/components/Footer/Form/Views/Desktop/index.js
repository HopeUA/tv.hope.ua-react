/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

/**
 * [IA]
 * Assets Import
 */
import Submit, { TYPE_NORMAL, TYPE_LOADING, TYPE_ERROR, TYPE_SUCCESS } from 'components/Assets/Icons/Submit';
import { STATE_NORMAL, STATE_LOADING, STATE_ERROR, STATE_SUCCESS } from '../..';

function Desktop(props) {
    const { handleChange, name, email, message, handleSubmit, handleDefaultSubmit, state } = props;

    let submitProps = {};
    const styles = {
        background: '',
        color: '',
        borderColor: ''
    };

    switch (state) {
        case STATE_NORMAL:
            submitProps = {
                type: TYPE_NORMAL,
                color: '#2793b2',
                buttonText: 'Отправить письмо'
            };
            break;
        case STATE_LOADING:
            submitProps = {
                type: TYPE_LOADING,
                color: '#fff',
                buttonText: 'Отправка письма'
            };
            styles.background = '#b7c3c4';
            styles.color = '#fff';
            styles.borderColor = '#b7c3c4';
            break;
        case STATE_ERROR:
            submitProps = {
                type: TYPE_ERROR,
                color: '#fff',
                buttonText: 'Ошибка отправки'
            };
            styles.background = '#a9473f';
            styles.color = '#fff';
            styles.borderColor = '#a9473f';
            break;
        case STATE_SUCCESS:
            submitProps = {
                type: TYPE_SUCCESS,
                color: '#fff',
                buttonText: 'Письмо отправлено'
            };
            styles.background = '#4ec27f';
            styles.color = '#fff';
            styles.borderColor = '#4ec27f';
            break;
        default: submitProps = TYPE_NORMAL;
    }

    return (
        <section className={ Styles.formComponent }>
            <header>
                <h1>Контакт Центр «Надія»</h1>
            </header>
            <form onSubmit={ handleDefaultSubmit }>
                <input
                    name="name"
                    type="text"
                    className={ Styles.name }
                    placeholder="Ваше имя"
                    onChange={ handleChange }
                    value={ name }
                    required
                />
                <input
                    name="email"
                    type="email"
                    className={ Styles.email }
                    placeholder="Ваш E-MAIL:"
                    onChange={ handleChange }
                    value={ email }
                    required
                />
                <textarea
                    name="message"
                    type="text"
                    placeholder="Текст сообщения..."
                    onChange={ handleChange }
                    value={ message }
                    required
                />
                <button type="submit" onClick={ handleSubmit } style={ styles }>
                    <Submit { ...submitProps }/>
                    { submitProps.buttonText }
                </button>
            </form>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Desktop.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDefaultSubmit: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Desktop;

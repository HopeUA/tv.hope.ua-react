import { createAction, handleActions } from 'redux-actions';

const actions = {
    CHANGE_LANGUAGE: '@hope/locale/CHANGE_LANGUAGE'
};

export const changeLanguage = createAction(actions.CHANGE_LANGUAGE, (lang) => {
    return lang;
});

const initialState = null;

const reducer = handleActions({
    [actions.CHANGE_LANGUAGE]: (state, action) => {
        return action.payload;
    }
}, initialState);

export default reducer;

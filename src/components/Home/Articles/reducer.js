import { createAction, handleActions } from 'redux-actions';
import MediaApi from 'api/Media';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItems = createAction(actions.FETCH, async (type = 'news') => {
    const items = await MediaApi.getArticles({ type });

    return {
        items,
        type
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            ...state,
            [action.payload.type]: {
                items: action.payload.items,
                loaded: true
            }
        };
    }
}, initialState);

export default reducer;

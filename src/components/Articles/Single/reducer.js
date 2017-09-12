import { createAction, handleActions } from 'redux-actions';
import ContentApi from 'api/Content';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItem = createAction(actions.FETCH, async (id) => {
    const item = await ContentApi.getArticleSingle(id);

    return {
        item
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            ...state,
            [action.payload.item.code]: action.payload.item
        };
    }
}, initialState);

export default reducer;

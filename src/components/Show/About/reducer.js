import { createAction, handleActions } from 'redux-actions';
import MediaApi from 'api/Media';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItem = createAction(actions.FETCH, async (showId) => {
    const item = await MediaApi.getShow(showId);

    return {
        showId,
        item
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            ...state,
            [action.payload.showId]: {
                item: action.payload.item,
                loaded: true
            }
        };
    }
}, initialState);

export default reducer;

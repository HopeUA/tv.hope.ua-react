import { createAction, handleActions } from 'redux-actions';
import MediaApi from 'api/Media';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItems = createAction(actions.FETCH, async (showId) => {
    const items = await MediaApi.getEpisodes({
        type: 'show',
        showId
    });

    return {
        showId,
        items
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            ...state,
            [action.payload.showId]: {
                items: action.payload.items,
                loaded: true
            }
        };
    }
}, initialState);

export default reducer;

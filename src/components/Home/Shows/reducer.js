import { createAction, handleActions } from 'redux-actions';
import MediaApi from 'api/Media';

const actions = {
    FETCH: '@hope/Home.Shows/FETCH'
};

export const fetchItems = createAction(actions.FETCH, async (type = 'popular') => {
    const items = await MediaApi.getShows({ type });

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

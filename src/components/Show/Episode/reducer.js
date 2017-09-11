import { createAction, handleActions } from 'redux-actions';
import MediaApi from 'api/Media';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItems = createAction(actions.FETCH, async (id) => {
    const items = await MediaApi.getEpisodeWithNeighbors(id);

    return {
        items
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        const newState = Object.assign({}, state);
        action.payload.items.forEach((item) => {
            newState[item.uid] = item;
        });

        return newState;
    }
}, initialState);

export default reducer;

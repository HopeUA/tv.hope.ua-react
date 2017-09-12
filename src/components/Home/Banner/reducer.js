import { createAction, handleActions } from 'redux-actions';
import ContentApi from 'api/Content';
import config from './config';

const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

export const fetchItems = createAction(actions.FETCH, async () => {
    const items = await ContentApi.getBanners();

    return {
        items
    };
});

const initialState = {};

const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            items: action.payload.items,
            loaded: true
        };
    }
}, initialState);

export default reducer;

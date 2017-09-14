/**
 * [IL]
 */
import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import SchedulerApi from 'api/Scheduler';

/**
 * [ICONF]
 */
import config from './config';

/**
 * [RA]
 */
const actions = {
    FETCH: `@hope/${config.id}/FETCH`
};

/**
 * [RAC]
 */
export const fetchItems = createAction(actions.FETCH, () => {
    const dateFrom = moment()
        .subtract(2, 'h')
        .toDate();
    const dateTo = moment()
        .add(6, 'h')
        .toDate();

    return SchedulerApi.getEvents({
        dateFrom,
        dateTo
    });
});

/**
 * [RIS]
 */
const initialState = {
    items: [],
    loaded: false
};

/**
 * [RR]
 */
const reducer = handleActions({
    [actions.FETCH]: (state, action) => {
        return {
            items: action.payload,
            loaded: true
        };
    }
}, initialState);

/**
 * [IE]
 */
export default reducer;

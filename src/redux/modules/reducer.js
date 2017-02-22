import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { createResponsiveStateReducer } from 'redux-responsive';
import locale from './locale';

/**
 * Component reducers
 */
import episodes from 'components/Home/Episodes/reducer';
import timeline from 'components/Shared/Timeline/reducer';
// import watchUs from './watchUs';

export default combineReducers({
    routing: routerReducer,
    browser: createResponsiveStateReducer({
        phonePortrait: 414,
        phoneLandscape: 667,
        tabletPortrait: 768,
        tabletLandscape: 1024,
        desktop: 1366,
        desktopWide: 1680,
        desktopHD: 1920,
        desktopMega: 2560
    }),
    reduxAsyncConnect,
    locale,
    'Home.Episodes': episodes,
    'Shared.Timeline': timeline
    // watchUs
});

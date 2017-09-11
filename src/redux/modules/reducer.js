import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { createResponsiveStateReducer } from 'redux-responsive';
import locale from './locale';

/**
 * Component reducers
 */
import HomeEpisodes from 'components/Home/Episodes/reducer';
import SharedTimeline from 'components/Shared/Timeline/reducer';
import HomeShows from 'components/Home/Shows/reducer';
import HomeArticles from 'components/Home/Articles/reducer';
import HomeBanner from 'components/Home/Banner/reducer';
import ArticlesSingle from 'components/Articles/Single/reducer';
import ShowList from 'components/Show/List/reducer';
import ShowAbout from 'components/Show/About/reducer';
import ShowEpisode from 'components/Show/Episode/reducer';
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
    'Home.Episodes': HomeEpisodes,
    'Shared.Timeline': SharedTimeline,
    'Home.Shows': HomeShows,
    'Home.Articles': HomeArticles,
    'Home.Banner': HomeBanner,
    'Articles.Single': ArticlesSingle,
    'Show.List': ShowList,
    'Show.About': ShowAbout,
    'Show.Episode': ShowEpisode
});

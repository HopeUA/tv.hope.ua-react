import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-connect';
import { translate } from 'react-i18next';
import getAsyncLoaders from 'lib/getAsyncLoaders';

import Meta from './Meta';
import Helmet from 'react-helmet';

import * as Show from 'components/Show';
import * as Shared from 'components/Shared';

/**
 * Async data loading
 */
const loaders = getAsyncLoaders([
    {
        component: Shared.Timeline
    },
    {
        component: Show.Episode
    }
]);
/**
 * END Async data loading
 */

/* eslint-disable react/prefer-stateless-function */
@translate(['common'])
@asyncConnect(
    loaders
)
export default class Page extends Component {
    static propTypes = {
        params: PropTypes.object.isRequired
    };

    render = () => {
        const { params } = this.props;

        return (
            <section>
                <Helmet { ...Meta() }/>
                <Show.Episode current={ `${params.showId}${params.episodeId}` }/>
            </section>
        );
    }
}

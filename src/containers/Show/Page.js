import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as Show from 'components/Show';
import Meta from './Meta';
import Helmet from 'react-helmet';

import ShowItem from './Mock/show.json';
import episodes from './Mock/episodes.json';
import episodeItems from './Mock/episode.json';

/* eslint-disable react/prefer-stateless-function */
@translate(['common'])
@connect(({ browser }) => {
    return { browser };
})
export default class Page extends Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render = () => {
        return (
            <section>
                <Helmet { ...Meta() }/>
                <Show.Episode items={ episodeItems } current={ 'ADUU00317' }/>
                <Show.About show={ ShowItem }/>
                <Show.List episodes={ episodes }/>
            </section>
        );
    }
}

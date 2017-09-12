import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as Articles from 'components/Articles';
import Meta from './Meta';
import Helmet from 'react-helmet';
import items from './Mock/articles.json';

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
                <Articles.Single item={ items[0] }/>
                <Articles.List items={ items }/>
            </section>
        );
    }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import * as Programs from 'components/Programs';
import Items from './Mock/Data.json';
import Meta from './Meta';
import Helmet from 'react-helmet';

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
                <Programs.ProgramsList items={ Items }/>
            </section>
        );
    }
}

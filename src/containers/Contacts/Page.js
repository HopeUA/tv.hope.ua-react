import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Meta from './Meta';
import { Info } from 'components/Contacts';
import * as Footer from 'components/Footer';
import config from 'config';

export default class Contacts extends Component {
    render = () => {
        return (
            <section>
                <Helmet { ...Meta() }/>
                <Info social={ config.social }/>
                <Footer.Banners/>
                <Footer.Shows/>
                <Footer.Form/>
                <Footer.Navigation/>
            </section>
        );
    }
}

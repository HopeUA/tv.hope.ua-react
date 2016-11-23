import React, { Component, PropTypes } from 'react';

import Styles from './Styles/main.scss';

import PlaySmall from 'components/Assets/Icons/PlaySmall';
import Palette from 'components/Assets/Palette';
/* eslint-disable */
export default class Mobile extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired
    };

    video = null;

    playVideo = () => {
        console.log(this.video);
    };

    render() {
        const { url } = this.props;

        return (
            <section className={ Styles.liveComponent }>
                <a href={ url } onClick={ this.playVideo }>
                    <PlaySmall color={ Palette.paletteColor6 } className={ Styles.play }/>
                    Смотреть ТВ «Надія» Онлайн
                </a>
            </section>
        );
    }
}


// <video ref={ (ref) => this.video = ref }>
//     <source src={ url } type="application/x-mpegurl"/>
// </video>

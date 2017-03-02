/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

/**
 * [IA]
 * Assets Import
 */
import PlaySmall from 'components/Assets/Icons/PlaySmall';
import Palette from 'components/Assets/Palette';

/* eslint-disable */
class Mobile extends Component {
    /**
     * [CPT]
     * Component prop types
     */
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
                    <PlaySmall color={ Palette.mainColor1 } className={ Styles.play }/>
                    Смотреть ТВ «Надія» Онлайн
                </a>
            </section>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Mobile;
// <video ref={ (ref) => this.video = ref }>
//     <source src={ url } type="application/x-mpegurl"/>
// </video>

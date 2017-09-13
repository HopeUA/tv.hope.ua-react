import React, { PropTypes } from 'react';
import cx from 'classnames';
import Moment from 'moment';
import YouTube from 'react-youtube';

import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';

// import BreakPoints from 'vendor/PixelPerfect/breakpoints';
import Palette from 'components/Assets/Palette';
import Play from 'components/Assets/Icons/Play';

Moment.locale('ru');

export default function Common(props) {
    const { items, current } = props;

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const [currentEpisode] = items.filter((element) => {
        return element.uid === current;
    });

    const styles = {
        backgroundImage: `url(${currentEpisode.image})`
    };

    const episodeItems = items.map((element) => {
        const styles = {
            backgroundImage: `url(${element.image})`
        };

        const itemClasses = cx({
            [Styles.active]: element.uid === current,
            [Styles.item]: true
        });

        return (
            <div key={ element.uid } className={ itemClasses }>
                <div className={ Styles.image } style={ styles }>
                    <Play className={ Styles.playSmall } color={ Palette.tempColor39 }/>
                    <span className={ Styles.time }>30:00</span>
                </div>
                <p className={ Styles.description }>
                    { element.title }
                </p>
            </div>
        );
    });

    const playerParams = {
        playerVars: {
            autoplay: 1,
            rel: 0
        }
    };

    return (
        <section className={ Styles.episodeComponent }>
            <div className={ Styles.cover } style={ styles }>
                <YouTube
                    videoId={ currentEpisode.source.youtube.id }
                    className={ Styles.player }
                    opts={ playerParams }
                />
                { /* <Play className={ Styles.play } color={ Palette.tempColor39 }/> */ }
            </div>
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>{ currentEpisode.title }</h1>
                <span className={ Styles.date }>{ Moment(currentEpisode.publish).format('DD MMMM, YYYY') }</span>
                <p className={ Styles.description }>{ currentEpisode.description }</p>
            </div>
            <Slider { ...properties }>
                { episodeItems }
            </Slider>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired
};

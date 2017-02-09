import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import Palette from 'components/Assets/Palette';
import Play from 'components/Assets/Icons/PlayPause';
import ArrowBanner from 'components/Assets/Icons/BannerArrow';

export default function Desktop(props) {
    const { mediaType } = props;

    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-desktop.jpg)'
    };

    const arrow = [
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name,
        BreakPoints.desktopWide.name].indexOf(mediaType) !== -1
    ;

    const dots = [];

    for (let i = 0; i < 5; i++) {
        const className = cx({
            [Styles.item]: true,
            [Styles.active]: i === 1
        });
        dots.push(
            <span key={ i } className={ className }/>
        );
    }

    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.cover }>
                <div className={ Styles.image } style={ imageStyle }/>
            </div>
            <div className={ Styles.wrap }>
                <div className={ Styles.content }>
                    <div className={ Styles.text }>
                        <span className={ Styles.time }>22:30</span>
                        <span className={ Styles.dayOfWeek }>Воскресенье</span>
                        <h1 className={ Styles.title }>Закон Божий и закон Христов</h1>
                        <h2 className={ Styles.subTitle }>В гостях сегодня<br/>Олег Харламов</h2>
                    </div>
                    <div className={ Styles.controls }>
                        { arrow }
                        <ArrowBanner
                            className={ Styles.arrowLeft }
                            color={ Palette.mainColor1 }
                            isShowCircle={ arrow }
                        />
                        <Play className={ Styles.play } color={ Palette.mainColor1 }/>
                        <ArrowBanner
                            className={ Styles.arrowRight }
                            color={ Palette.mainColor1 }
                            isShowCircle={ arrow }
                        />
                    </div>
                </div>
            </div>
            <div className={ Styles.loader }>
                <div className={ Styles.progress }/>
            </div>
            <div className={ Styles.dots }>
                { dots }
            </div>
        </section>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired
};

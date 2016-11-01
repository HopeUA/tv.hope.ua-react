import React, { PropTypes } from 'react';

import Styles from '../main.scss';
import Palette from 'components/Assets/Palette';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';
import GoTo from 'components/Assets/Icons/GoTo';

export default function Large(props) {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/FKLU/episodes/00815/FKLU00815-cover.jpg)'
    };

    const description = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1 ? null : (<p>Чому багато науковців, спираючись на відкриття
    науки заговорили про науковий доказ того, що все створено Творцем?</p>);

    const title = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ].indexOf(props.mediaType) !== -1 ? 'Актуально' : 'Актуальное видео';

    const goToIcon = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1 ? null : (<GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>);

    return (
        <section className={ Styles.large }>
            <h1>{ title }</h1>
            <article className={ Styles.main }>
                <div className={ Styles.image } style={ imageStyle }>
                { goToIcon }
                </div>
                <div className={ Styles.container }>
                    <div className={ Styles.blur } style={ imageStyle }></div>
                    <div className={ Styles.info }>
                        <div className={ Styles.date }>
                            <BubbleVideo color={ Palette.paletteColor6 } className={ Styles.bubble }/>
                            <span><strong>18 августа,&nbsp;</strong>2016</span>
                        </div>
                        <a className={ Styles.titleLink }>Видиме з невидимого</a>
                        <div className={ Styles.link }>
                            <a href="#">Філософський камінь</a>
                            <Arrow color={ Palette.paletteColor6 } className={ Styles.arrow }/>
                        </div>
                        { description }
                    </div>
                </div>
            </article>
        </section>
    );
}

Large.propTypes = {
    mediaType: PropTypes.string.isRequired
};

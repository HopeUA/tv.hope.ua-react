import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from '../main.scss';
import Palette from 'components/Assets/Palette';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import BubbleVideo from 'components/Assets/Icons/BubbleVideo';
import Arrow from 'components/Assets/Icons/Arrow';
import GoTo from 'components/Assets/Icons/GoTo';

Moment.locale('ru');

export default function Large(props) {
    const { item } = props;
    const Date = Moment(item.publish);

    const description = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1 ? null : (<p>{ item.description }</p>);

    const title = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ].indexOf(props.mediaType) !== -1 ? 'Актуально' : 'Актуальное видео';

    const goToIcon = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name
    ].indexOf(props.mediaType) !== -1 ? null : (<GoTo color={ Palette.paletteColor6 } className={ Styles.goTo }/>);

    const imageStyle = {
        backgroundImage: `url(${item.image})`
    };

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
                            <span>
                                <strong>
                                    { `${Date.format('LL')
                                        .split(' ')[0]} ${Date.format('LL')
                                        .split(' ')[1]},` }
                                </strong>
                                &nbsp;{ `${Date.format('LL')
                                .split(' ')[2]}` }
                            </span>
                        </div>
                        <a className={ Styles.titleLink }>{ item.title }</a>
                        <div className={ Styles.link }>
                            <h1>
                                <a href="#">{ item.show.title }</a>
                            </h1>
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
    mediaType: PropTypes.string.isRequired,
    item: PropTypes.array
};

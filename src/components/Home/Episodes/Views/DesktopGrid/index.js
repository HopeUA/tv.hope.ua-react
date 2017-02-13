import React, { PropTypes } from 'react';
import Slider from 'vendor/Slider/SliderComponent';

import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import BreakPoints from 'helpers/breakpoints';

import Palette from 'components/Assets/Palette';
import GoTo from 'components/Assets/Icons/GoTo';
import Refresh from 'components/Assets/Icons/Reload';

export default function DesktopGrid(props) {
    const { mediaType, items, title, canRefresh, scrollDisable, handleRefresh } = props;

    if (items.length === 0) {
        return null;
    }

    const [large] = items;
    const styles = {
        backgroundImage: `url(${large.image})`
    };

    const episodes = items.slice(1).map((el) => {
        const background = {
            backgroundImage: `url(${el.image})`
        };

        return (
            <div className={ Styles.small } style={ background } key={ el.uid }>
                <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                <h3>{ el.title }</h3>
            </div>
        );
    });

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    const refreshStyle = {
        display: canRefresh ? 'flex' : 'none'
    };

    const reload = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name
    ].indexOf(mediaType) === -1 ? (
        <div
            className={ Styles.refresh }
            style={ refreshStyle }
            onClick={ handleRefresh }
        >
            Обновить
            <Refresh color={ Palette.tempColor3 }/>
        </div>
        ) : null;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.episodesComponent }>
                <div className={ Styles.header }>
                    <h1>{ title }</h1>
                    { reload }
                </div>
                <Slider { ...properties } disabled={ scrollDisable }>
                    <div className={ Styles.large } style={ styles }>
                        <GoTo color={ Palette.mainColor1 } className={ Styles.goTo }/>
                        <h3>{ large.title }</h3>
                        <h4>{ large.show.title }</h4>
                    </div>
                    <div className={ Styles.row }>
                        { episodes }
                    </div>
                </Slider>
            </section>
        </section>
    );
}

DesktopGrid.propTypes = {
    items: PropTypes.array,
    title: PropTypes.string.isRequired,
    mediaType: PropTypes.string.isRequired,
    canRefresh: PropTypes.bool.isRequired,
    scrollDisable: PropTypes.bool.isRequired,
    handleRefresh: PropTypes.func.isRequired
};
DesktopGrid.defaultProps = {
    items: []
};

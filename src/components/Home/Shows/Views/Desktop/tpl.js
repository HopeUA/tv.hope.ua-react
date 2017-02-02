import React from 'react';
import Slider from 'vendor/Slider/SliderComponent';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

export default function Desktop() {
    const styles = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ALKU/episodes/02816/ALKU02816-cover.jpg)'
    };

    const properties = {
        slider: Styles.slider,
        arrowLeft: Styles.arrowLeft,
        arrowRight: Styles.arrowRight,
        list: Styles.list,
        wrap: Styles.wrap,
        arrow: Styles.arrow
    };

    return (
        <section className={ Grids.container }>
            <section className={ Styles.showsComponent }>
                <h1 className={ Styles.title }>Популярные программы</h1>
                <Slider { ...properties }>
                    <div className={ Styles.row }>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                        <div className={ Styles.item } style={ styles }/>
                    </div>
                </Slider>
            </section>
        </section>
    );
}

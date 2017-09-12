import React from 'react';

import Styles from './Styles/main.scss';

import Palette from 'components/Assets/Palette';

import Arrow from 'components/Assets/Icons/Arrow';

export default function Common() {
    const imageStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/ADUU/episodes/00317/ADUU00317-cover.jpg)'
    };

    return (
        <section className={ Styles.listComponent }>
            <div className={ Styles.list }>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.info }>
                        <p className={ Styles.description }>
                            Всемирно известный ученый-атеист доказал, что Бог есть
                        </p>
                        <span className={ Styles.date }>
                            { /* { Moment(currentEpisode.publish).format('DD MMMM, YYYY') } */ }
                            15 ноября, 2017
                        </span>
                    </div>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.info }>
                        <p className={ Styles.description }>
                            Почему люди лучше запоминают информацию, когда
                        </p>
                        <span className={ Styles.date }>
                            { /* { Moment(currentEpisode.publish).format('DD MMMM, YYYY') } */ }
                            15 ноября, 2017
                        </span>
                    </div>
                </div>
                <div className={ Styles.item }>
                    <div className={ Styles.image } style={ imageStyle }/>
                    <div className={ Styles.info }>
                        <p className={ Styles.description }>
                            Всемирно известный ученый-атеист доказал, что Бог есть
                        </p>
                        <span className={ Styles.date }>
                            { /* { Moment(currentEpisode.publish).format('DD MMMM, YYYY') } */ }
                            15 ноября, 2017
                        </span>
                    </div>
                </div>
            </div>
            <div className={ Styles.showMore }>
                <span className={ Styles.shown }>показано 3 из 6</span>
                <span className={ Styles.download }>Загрузить еще 3</span>
                <div className={ Styles.circle }>
                    <Arrow color={ Palette.tempColor2 } className={ Styles.arrow }/>
                </div>
            </div>
        </section>
    );
}

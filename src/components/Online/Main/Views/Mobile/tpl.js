import React from 'react';

import Play from 'components/Assets/Icons/Play';
import Flag from 'components/Assets/Icons/Flag';
import Arrow from 'components/Assets/Icons/Arrow';
import Palette from 'components/Assets/Palette';

import Styles from './Styles/main.scss';

export default function Common() {
    // const videoStyle = {
    //     backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    // };

    const listStyle = {
        height: null
    };

    const progressStile = {
        width: '76%'
    };

    return (
        <section className={ Styles.mainComponent }>
            <div className={ Styles.video }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ Styles.languages }>
                <ul className={ Styles.list } style={ listStyle }>
                    <li className={ Styles.item }>
                        <Flag language={ 'uk' } className={ Styles.flag }/>
                        <span className={ Styles.language }>українська</span>
                    </li>
                    <li className={ Styles.item }>
                        <Flag language={ 'ru' } className={ Styles.flag }/>
                        <span className={ Styles.language }>русский</span>
                    </li>
                </ul>
                <div className={ Styles.arrowButton }>
                    <Arrow color={ Palette.mainColor1 } className={ Styles.arrow }/>
                </div>
            </div>
            <div className={ Styles.info }>
                <h1 className={ Styles.title }>Ник Вуйчич: День благодаренья</h1>
                <h2 className={ Styles.subTitle }>Хліб щоденний</h2>
                <div className={ Styles.bar }>
                    <span className={ Styles.startTime }>16:30</span>
                    <div className={ Styles.timeLineContainer }>
                        <div className={ Styles.scale }>
                            <div className={ Styles.progress } style={ progressStile }>
                                <span/>
                            </div>
                        </div>
                    </div>
                    <span className={ Styles.endTime }>17:30</span>
                </div>
                <p className={ Styles.description }>
                    Австралийский мотивационный оратор, меценат, писатель и певец, рождённый с
                    редким наследственным заболеванием, приводящим к отсутствию всех четырёх конечностей.
                    «Моя миссия — помочь людям найти свой путь в жизни», — говорит он.
                </p>
            </div>
        </section>
    );
}

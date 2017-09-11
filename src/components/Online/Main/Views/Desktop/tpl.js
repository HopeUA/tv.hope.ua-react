import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';
import Play from 'components/Assets/Icons/Play';
import Flag from 'components/Assets/Icons/Flag';
import Sings from 'components/Assets/Icons/Sings';
import Palette from 'components/Assets/Palette';

export default function Common() {
    const progressStile = {
        width: '76%'
    };

    return (
        <section className={ Styles.mainComponent }>
            <div className={ Styles.video }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ Styles.info }>
                <div className={ Styles.languages }>
                    <div className={ Styles.item }>
                        <Flag language={ 'uk' } className={ Styles.flag }/>
                        <span className={ Styles.language }>українська</span>
                    </div>
                    <div className={ Styles.item }>
                        <Flag language={ 'ru' } className={ Styles.flag }/>
                        <span className={ Styles.language }>русский</span>
                    </div>
                    <div className={ Styles.item }>
                        <Flag language={ 'uk' } className={ Styles.flag }/>
                        <span className={ Styles.language }>українська</span>
                    </div>
                    <div className={ Styles.item }>
                        <Flag language={ 'usa' } className={ Styles.flag }/>
                        <span className={ Styles.language }>english</span>
                    </div>
                    <div className={ Styles.item }>
                        <Sings className={ Styles.sings }/>
                        <span className={ Styles.language }>сурдоперевод</span>
                    </div>
                </div>
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

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

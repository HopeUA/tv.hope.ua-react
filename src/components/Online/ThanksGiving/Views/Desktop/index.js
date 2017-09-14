import React, { PropTypes } from 'react';
import Moment from 'moment';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Play from 'components/Assets/Icons/Play';
import Flag from 'components/Assets/Icons/Flag';
import Palette from 'components/Assets/Palette';
import Sings from 'components/Assets/Icons/Sings';

Moment.locale('ru');

export default function Common(props) {
    // в episodeProgress нужно передать, начало программы, текущее время и конец программы

    // const episodeProgress = (100 / (Moment(next.date).unix() - Moment(current.date).unix())
    // * (Moment(currentTime).unix() - Moment(current.date).unix()));
    //
    // const progressStile = {
    //     width: `${episodeProgress}%`
    // };

    const {
        streams,
        handleLanguageChange,
        language
    } = props;

    const progressStile = {
        width: '76%'
    };

    const flags = streams.map((stream) => {
        const itemStyles = cx({
            [Styles.item]: true,
            [Styles.active]: stream.id === language
        });

        return (
            <div className={ itemStyles } key={ stream.id } onClick={ handleLanguageChange(stream.id) }>
                <Flag language={ stream.id } className={ Styles.flag }/>
                <span className={ Styles.language }>{ stream.title }</span>
            </div>
        );
    });

    return (
        <section className={ Styles.mainComponent }>
            <div className={ Styles.video }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ Styles.info }>
                <div className={ Styles.languages }>
                    { flags }
                </div>
                <h1 className={ Styles.title }>Свято Подяки: Нік Вуйчич</h1>
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
    streams: PropTypes.array.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
};

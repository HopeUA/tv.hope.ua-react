import React, { PropTypes } from 'react';
import cx from 'classnames';

import Arrow from 'components/Assets/Icons/Arrow';
import Flag from 'components/Assets/Icons/Flag';
import Play from 'components/Assets/Icons/Play';
import SignsFlag from 'components/Assets/Icons/SignsFlag';

import Palette from 'components/Assets/Palette';
import Styles from './Styles/main.scss';

export default function Common(props) {
    const {
        handleLanguageChange,
        handleMenu,
        isOpened,
        language,
        streams
    } = props;

    const videoStyle = {
        backgroundImage: 'url(https://cdn.hope.ua/web/tv.hope.ua/banners/ban1-mobile.jpg)'
    };

    const progressStyle = {
        width: '76%'
    };

    const languagesStyle = cx({
        [Styles.languages]: true,
        [Styles.opened]: isOpened
    });

    // const active = streams.find((stream) => stream.id === language);
    const items = streams.sort((a, b) => {
        if (b.id === language) {
            return 1;
        }

        return 0;
    })
    .map((stream) => {
        let title = '';

        switch (stream.title) {
            case 'укр':
                title = 'українська';
                break;
            case 'рус':
                title = 'русский';
                break;
            default:
                ({ title } = stream);
        }

        return (
            <div
                className={ Styles.item }
                key={ stream.id }
                onClick={ handleLanguageChange(stream.id) }
            >
                {
                    stream.id === 'signs' ? (
                        <SignsFlag language={ stream.id } className={ Styles.signs }/>
                    ) : (
                        <Flag language={ stream.id } className={ Styles.flag }/>
                    )
                }
                <span className={ Styles.language }>
                    { title }
                </span>
            </div>
        );
    });

    return (
        <section className={ Styles.mainComponent }>
            <div className={ Styles.video } style={ videoStyle }>
                <Play className={ Styles.play } color={ Palette.tempColor39 }/>
            </div>
            <div className={ languagesStyle }>
                <ul className={ Styles.list }>
                    { items }
                </ul>
                <div className={ Styles.arrowButton } onClick={ handleMenu }>
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
                            <div className={ Styles.progress } style={ progressStyle }>
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
    handleLanguageChange: PropTypes.func.isRequired,
    handleMenu: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    language: PropTypes.string.isRequired,
    streams: PropTypes.array.isRequired
};

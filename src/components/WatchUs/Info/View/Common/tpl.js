/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';
import Palette from 'components/Assets/Palette';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

/**
 * [IA]
 * Assets Import
 */

import Internet from 'components/WatchUs/Info/Assets/Internet';
import Android from 'components/WatchUs/Info/Assets/Android';
import Apple from 'components/WatchUs/Info/Assets/Apple';
import Arrow from 'components/WatchUs/Info/Assets/PointerArrow';
import Satellite from 'components/WatchUs/Info/Assets/Satellite';
import Tv from 'components/WatchUs/Info/Assets/Tv';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Common(props) {
    const { mediaType } = props;

    // if (watchUs.locatorActive && [
    //     BreakPoints.phonePortrait.name,
    //     BreakPoints.phoneLandscape.name
    // ].indexOf(browser.mediaType) !== -1) {
    //     return null;
    // }

    return (
        <section className={ Grids.container }>
            <section className={ Styles.infoComponent }>
                <section className={ Styles.internet }>
                    <header>
                        <Internet color={ Palette.tempColor29 } color1={ Palette.tempColor28 }/>
                        <h1>Интернет и приложения</h1>
                    </header>
                    <p className={ Styles.searchUs }>Ищите нас на мобильных устройствах</p>
                    <div className={ Styles.apps }>
                        <a
                            className={ Styles.androidLink }
                            href="https://play.google.com/store/apps/details?id=ua.hope"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Android color={ Palette.tempColor27 } color1={ Palette.mainColor1 }/>
                        </a>
                        <div>
                            <Arrow className={ Styles.appleArrow } color={ Palette.commonColor2 }/>
                            <span>скачать приложение</span>
                            <Arrow className={ Styles.androidArrow } color={ Palette.tempColor27 }/>
                        </div>
                        <a
                            className={ Styles.appleLink }
                            href="https://itunes.apple.com/ua/app/hope-channel-ukraine-telekanal/id504194933?l=ru&mt=8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Apple color={ Palette.commonColor2 } color1={ Palette.mainColor1 }/>
                        </a>
                    </div>
                    <p className={ Styles.watchOnline }>Смотрите вещание в сети Интернет</p>
                    <a className={ Styles.btn } id="watchUsLive" href="#">
                        ТВ «Надія» Онлайн
                    </a>
                </section>
                <section className={ Styles.satellite }>
                    <header>
                        <Satellite color={ Palette.tempColor28 } color1={ Palette.tempColor29 }/>
                        <h1>Спутниковое вещание</h1>
                    </header>
                    <ul>
                        <li className={ Styles.itemChannel }>
                            <span>Канал:</span>
                            <span>Nadiya TV</span>
                        </li>
                        <li className={ Styles.itemSatellite }>
                            <span>Спутник:</span>
                            <span>Astra-4A (Sirius)</span>
                        </li>
                        <li className={ Styles.itemReceivingFrequency }>
                            <span>Частота приема:</span>
                            <span>12,284 МГц</span>
                        </li>
                        <li className={ Styles.itemPolarization }>
                            <span>Поляризация:</span>
                            <span>V, FEC ¾</span>
                        </li>
                        <li className={ Styles.itemFlowRate }>
                            <span>Скорость потока:</span>
                            <span>27.500 Мбит/с</span>
                        </li>
                    </ul>
                    <div className={ Styles.tunerContainer }>
                        <a className={ cx(Styles.btn, Styles.btnTuner) } href="#">
                            Как настроить тюнер
                        </a>
                        { BP.isPhoneLandscape(mediaType) ? (
                            <div className={ Styles.tunerInfo }>
                                <Arrow/>
                                <p>Подробная видео иструкция о том, как настроить ваш тюнер на нужный спутник</p>
                            </div>
                        ) : null }
                    </div>
                </section>
                <section className={ Styles.cable }>
                    <header>
                        <Tv color={ Palette.tempColor28 } color1={ Palette.tempColor29 }/>
                        <h1>Кабельные сети</h1>
                    </header>
                    <p>Телеканал «Надія» вещает через операторов кабельных сетей. Узнайте, можно ли смотреть нас
                    через кабельних операторов вашего населенного пункта – используйте карту ниже</p>

                    { BP.isMobile(mediaType) ? (
                        <Link className={ cx(Styles.btn, Styles.btnSearch) } to="/watch-us/locator">
                        Поиск операторов
                        </Link>
                    ) : null }

                    { BP.isDesktop(mediaType) ? (
                        <div className={ Styles.providerSearch }>Найти оператора на карте</div>
                    ) : null }
                </section>
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

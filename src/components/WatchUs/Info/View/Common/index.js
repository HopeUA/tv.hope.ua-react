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
    const { mediaType, t } = props;

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
                        <h1>{ t('WatchUs.Info.internetTitle') }</h1>
                    </header>
                    <p className={ Styles.searchUs }>{ t('WatchUs.Info.searchUs') }</p>
                    <div className={ Styles.apps }>
                        <a
                            className={ Styles.androidLink }
                            href="https://play.google.com/store/apps/details?id=ua.hope"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Android color={ Palette.tempColor27 }/>
                        </a>
                        <div>
                            <Arrow className={ Styles.appleArrow } color={ Palette.commonColor2 }/>
                            <span>{ t('WatchUs.Info.downloadApp') }</span>
                            <Arrow className={ Styles.androidArrow } color={ Palette.tempColor27 }/>
                        </div>
                        <a
                            className={ Styles.appleLink }
                            href="https://itunes.apple.com/ua/app/hope-channel-ukraine-telekanal/id504194933?l=ru&mt=8"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Apple color={ Palette.commonColor2 }/>
                        </a>
                    </div>
                    <p className={ Styles.watchOnline }>{ t('WatchUs.Info.watchBroadcasting') }</p>
                    <a className={ Styles.btn } id="watchUsLive" href="#">
                        { t('WatchUs.Info.tvOnlineBtn') }
                    </a>
                </section>
                <section className={ Styles.satellite }>
                    <header>
                        <Satellite color={ Palette.tempColor28 } color1={ Palette.tempColor29 }/>
                        <h1>{ t('WatchUs.Info.satelliteTitle') }</h1>
                    </header>
                    <ul>
                        <li className={ Styles.itemChannel }>
                            <span>{ t('WatchUs.Info.channel.1') }:</span>
                            <span>{ t('WatchUs.Info.channel.2') }</span>
                        </li>
                        <li className={ Styles.itemSatellite }>
                            <span>{ t('WatchUs.Info.satellite.1') }:</span>
                            <span>{ t('WatchUs.Info.satellite.2') }</span>
                        </li>
                        <li className={ Styles.itemReceivingFrequency }>
                            <span>{ t('WatchUs.Info.frequency.1') }:</span>
                            <span>{ t('WatchUs.Info.frequency.2') }</span>
                        </li>
                        <li className={ Styles.itemPolarization }>
                            <span>{ t('WatchUs.Info.polarization.1') }:</span>
                            <span>{ t('WatchUs.Info.polarization.2') }</span>
                        </li>
                        <li className={ Styles.itemFlowRate }>
                            <span>{ t('WatchUs.Info.flowRate.1') }:</span>
                            <span>{ t('WatchUs.Info.flowRate.2') }</span>
                        </li>
                    </ul>
                    <div className={ Styles.tunerContainer }>
                        <a className={ cx(Styles.btn, Styles.btnTuner) } href="#">
                            { t('WatchUs.Info.settingBtn') }
                        </a>
                        { BP.isPhoneLandscape(mediaType) ? (
                            <div className={ Styles.tunerInfo }>
                                <Arrow/>
                                <p>{ t('WatchUs.Info.settingDescription ') }</p>
                            </div>
                        ) : null }
                    </div>
                </section>
                <section className={ Styles.cable }>
                    <header>
                        <Tv color={ Palette.tempColor28 } color1={ Palette.tempColor29 }/>
                        <h1>{ t('WatchUs.Info.cableTitle') }</h1>
                    </header>
                    <p>{ t('WatchUs.Info.cableDescription') }</p>

                    { BP.isMobile(mediaType) ? (
                        <Link className={ cx(Styles.btn, Styles.btnSearch) } to="/watch-us/locator">
                            { t('WatchUs.Info.searchOperator.2') }
                        </Link>
                    ) : null }

                    { BP.isDesktop(mediaType) ? (
                        <div className={ Styles.providerSearch }>{ t('WatchUs.Info.searchOperator.1') }</div>
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
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default Common;

/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Grids from 'theme/Grid.scss';
import Styles from './Styles/main.scss';

/**
 * [IA]
 * Assets Import
 */
import Palette from 'components/Assets/Palette';
import Hope from 'components/About/Why/Assets/Hope';
import Politics from 'components/About/Why/Assets/WhyPolitics';
import Violence from 'components/About/Why/Assets/WhyViolence';
import Advert from 'components/About/Why/Assets/WhyAdvert';
import CheckCircle from 'components/About/Why/Assets/CheckCircle';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Why(props) {
    const { mediaType, t } =  props;

    const broadcastingTitle = BP.isPhonePortrait(mediaType) ? (
    [
        <h1 key={ 1 }>{ t('About.Why.characteristic.1') }</h1>,
        <h2 key={ 2 }>{ `${t('About.Why.characteristic.2')}${t('About.Why.characteristic.3')}` }</h2>
    ]
    ) : (
    [
        <h1 key={ 1 }>{ `${t('About.Why.characteristic.1')}${t('About.Why.characteristic.2')}` }</h1>,
        <h2 key={ 2 }>{ t('About.Why.characteristic.3') }</h2>
    ]
    );

    return (
        <section className={ Grids.container }>
            <section className={ Styles.whyComponent }>
                <section className={ Styles.why }>
                    <header>
                        { !BP.isPhoneLandscape(mediaType) ? (
                            <Hope color={ Palette.commonColor2 }/>
                        ) : null }
                        <h1>{ t('About.Why.whyExactly.1') }</h1>
                    </header>
                    <div className={ Styles.arguments }>
                        <div className={ Styles.policy }>
                            <Politics color={ Palette.tempColor32 } color1={ Palette.tempColor33 }/>
                            <span className={ Styles.label }>{ t('About.Why.without') }</span>
                            <span className={ Styles.text }>{ t('About.Why.politic') }</span>
                        </div>
                        <div className={ Styles.violence }>
                            <Violence color={ Palette.tempColor32 } color1={ Palette.tempColor33 }/>
                            <span className={ Styles.label }>{ t('About.Why.without') }</span>
                            <span className={ Styles.text }>{ t('About.Why.violence') }</span>
                        </div>
                        <div className={ Styles.advert }>
                            <Advert color={ Palette.tempColor32 } color1={ Palette.tempColor33 }/>
                            <span className={ Styles.label }>{ t('About.Why.without') }</span>
                            <span className={ Styles.text }>{ t('About.Why.advert') }</span>
                        </div>
                    </div>
                </section>
                <section className={ Styles.aroundTheClock }>
                    <header>
                        <span><b>24</b>/<b>7</b></span>
                        { broadcastingTitle }
                    </header>
                    <ul>
                        <li className={ Styles.everydaySpeech }>
                            <CheckCircle color={ Palette.tempColor31 } color1={ Palette.tempColor32 }/>
                            <div>
                                <b>{ t('About.Why.everyday.1') }</b>
                                { t('About.Why.everyday.2') }
                            </div>
                        </li>
                        <li className={ Styles.varietyPrograms }>
                            <CheckCircle color={ Palette.tempColor31 } color1={ Palette.tempColor32 }/>
                            <div>
                                <b>{ t('About.Why.variety.1') }</b>
                                { t('About.Why.variety.2') }
                            </div>
                        </li>
                        <li className={ Styles.interactiveCommunication }>
                            <CheckCircle color={ Palette.tempColor31 } color1={ Palette.tempColor32 }/>
                            <div>
                                <b>{ t('About.Why.interactive.1') }</b>
                                { t('About.Why.interactive.2') }
                            </div>
                        </li>
                        <li className={ Styles.holisticChristianity }>
                            <CheckCircle color={ Palette.tempColor31 } color1={ Palette.tempColor32 }/>
                            <div>
                                <b>{ t('About.Why.holistic.1') }:</b>
                                { t('About.Why.holistic.2') }
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Why.propTypes = {
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default Why;

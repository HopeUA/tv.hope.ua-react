import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import PixelPerfect from 'components/PixelPerfect/component';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import ContactUs from 'components/Assets/Icons/ContactUs';
import Mail from 'components/Assets/Icons/Mail';
import PhoneAndInternet from 'components/Assets/Icons/PhoneAndInternet';
import PhoneButton from 'components/Assets/Icons/PhoneButton';
import PhoneContact from 'components/Assets/Icons/PhoneContact';
import Skype from 'components/Assets/Icons/Skype';
import SocialNetworks from 'components/Assets/Icons/SocialNetworks';
import WriteButton from 'components/Assets/Icons/WriteButton';
import Instagram from 'components/Assets/Social/instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';

/* eslint-disable react/prefer-stateless-function */
@connect(({ browser }) => {
    return { browser };
})
export default class Info extends Component {
    static propTypes = {
        browser: PropTypes.object.isRequired
    };

    render() {
        const { browser } = this.props;

        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            BreakPoints.tabletPortrait.name,
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name
        ];

        const socialTitle = browser.mediaType === BreakPoints.tabletPortrait.name ?
            'Ищите нас в социальных сетях'
            : 'Ищите в соц. сетях';

        return (
            <PixelPerfect templates={ templates } component="Info">
                <section className={ Grids.container }>
                    <section className={ Styles.infoComponent }>
                        <section className={ Styles.live }>
                            <header>
                                <ContactUs/>
                                <h1>Общайтесь онлайн</h1>
                            </header>
                            <div className={ Styles.chat }>
                                <p>Онлайн чат работает каждый день с <b>8:00 до 20:00</b></p>
                                <a href="#">
                                    <WriteButton/>
                                    Написать в онлайн чат
                                </a>
                            </div>
                            <div className={ Styles.call }>
                                <p>Онлайн чат работает каждый день с <b>8:00 до 20:00</b></p>
                                <a href="#">
                                    <PhoneButton/>
                                    Позвонить нам сейчас
                                </a>
                            </div>
                        </section>
                        <section className={ Styles.contacts }>
                            <header>
                                <PhoneAndInternet/>
                                <h1>Задайте вопрос</h1>
                            </header>
                            <div className={ Styles.phone }>
                                <div className={ Styles.row }>
                                    <PhoneContact/>
                                    <span>0 800 30 20 20</span>
                                </div>
                                <div>
                                    <p><span>Звоните</span> ежедневно: <b>8:00-20:00</b></p>
                                </div>
                            </div>
                            <div className={ Styles.skype }>
                                <div className={ Styles.row }>
                                    <Skype/>
                                    <a href="#">contact-hope</a>
                                </div>
                                <div>
                                    <p>Ответ <span>в сети Skype</span> в течение <b>1 мин</b></p>
                                </div>
                            </div>
                            <div className={ Styles.mail }>
                                <div className={ Styles.row }>
                                    <Mail/>
                                    <a href="#">contact@hope.ua</a>
                                </div>
                                <div>
                                    <p>Ответ <span>по почте</span> в течение <b>24 часов</b></p>
                                </div>
                            </div>
                        </section>
                        <section className={ Styles.social }>
                            <header>
                                <SocialNetworks/>
                                <h1>{ socialTitle }</h1>
                            </header>
                            <div className={ Styles.list }>
                                <div className={ Styles.item }>
                                    <Twitter/>
                                    <span>5k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <Vk/>
                                    <span>1k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <Facebook/>
                                    <span>3k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <Ok/>
                                    <span>6k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <YouTube/>
                                    <span>3k</span>
                                </div>
                                <div className={ Styles.item }>
                                    <Instagram/>
                                    <span>1k</span>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </PixelPerfect>
        );
    }
}

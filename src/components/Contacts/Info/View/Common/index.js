import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

import Palette from 'components/Assets/Palette';

import ContactUs from '../../Assets/ContactUs';
import Mail from '../../Assets/Mail';
import PhoneAndInternet from '../../Assets/PhoneAndInternet';
import PhoneButton from '../../Assets/PhoneButton';
import PhoneContact from '../../Assets/PhoneContact';
import Skype from '../../Assets/Skype';
import SocialNetworks from '../../Assets/SocialNetworks';
import WriteButton from '../../Assets/WriteButton';
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

    componentDidMount = () => {
        /* eslint-disable no-undef */
        window.senderCallback = () => {
            SenderWidget.init({
                companyId: 'i20076624232',
                autostart: false,
                showButton: false
            });
        };
        /* eslint-enable no-undef */

        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://widget.sender.mobi/build/init.js';
            fjs.parentNode.insertBefore(js, fjs, 'sender-widget');
        })(document, 'script');
    };

    startChat = (event) => {
        event.preventDefault();
        /* eslint-disable no-undef */
        SenderWidget.showWidget();
        /* eslint-enable no-undef */
    };

    render() {
        const { browser } = this.props;

        const socialTitle = browser.mediaType === BreakPoints.tabletPortrait.name ?
            'Ищите нас в социальных сетях'
            : 'Ищите в соц. сетях';

        return (
            <section className={ Grids.container }>
                <section className={ Styles.infoComponent }>
                    <section className={ Styles.live }>
                        <header>
                            <ContactUs color1={ Palette.paletteColor9 } color2={ Palette.paletteColor1 }/>
                            <h1>Общайтесь онлайн</h1>
                        </header>
                        <div className={ Styles.chat }>
                            <p>Онлайн чат работает каждый день с <b>9:00 до 17:00</b></p>
                            <a href="#" onClick={ this.startChat }>
                                <WriteButton color={ Palette.paletteColor2 }/>
                                Написать в онлайн чат
                            </a>
                        </div>
                        <div className={ Styles.call }>
                            <p>Контакт-центр работает каждый день с <b>9:00 до 21:00</b></p>
                            <a href="skype:contact-hope?call">
                                <PhoneButton color={ Palette.paletteColor2 }/>
                                Позвонить нам сейчас
                            </a>
                        </div>
                    </section>
                    <section className={ Styles.contacts }>
                        <header>
                            <PhoneAndInternet color1={ Palette.paletteColor9 } color2={ Palette.paletteColor1 }/>
                            <h1>Задайте вопрос</h1>
                        </header>
                        <div className={ Styles.phone }>
                            <div className={ Styles.row }>
                                <PhoneContact color={ Palette.paletteColor10 }/>
                                <span>0 800 30 20 20</span>
                            </div>
                            <div>
                                <p><span>Звоните</span> ежедневно: <b>9:00-21:00</b></p>
                            </div>
                        </div>
                        <div className={ Styles.skype }>
                            <div className={ Styles.row }>
                                <Skype/>
                                <a href="skype:contact-hope?chat">contact-hope</a>
                            </div>
                            <div>
                                <p>Ответ <span>в сети Skype</span> в течение <b>5 мин</b></p>
                            </div>
                        </div>
                        <div className={ Styles.mail }>
                            <div className={ Styles.row }>
                                <Mail color={ Palette.paletteColor10 }/>
                                <a href="mailto:contact@hope.ua">contact@hope.ua</a>
                            </div>
                            <div>
                                <p>Ответ <span>по почте</span> в течение <b>24 часов</b></p>
                            </div>
                        </div>
                    </section>
                    <section className={ Styles.social }>
                        <header>
                            <SocialNetworks color1={ Palette.paletteColor1 } color2={ Palette.paletteColor9 }/>
                            <h1>{ socialTitle }</h1>
                        </header>
                        <div className={ Styles.list }>
                            <a href="https://twitter.com/ua_hope" className={ Styles.item }>
                                <Twitter className={ Styles.twitter }/>
                                <span>1k</span>
                            </a>
                            <a href="https://vk.com/hopechannel" className={ Styles.item }>
                                <Vk className={ Styles.vk }/>
                                <span>5k</span>
                            </a>
                            <a href="https://www.facebook.com/hope.ua/" className={ Styles.item }>
                                <Facebook className={ Styles.fb }/>
                                <span>2k</span>
                            </a>
                            <a href="https://ok.ru/hopechannel" className={ Styles.item }>
                                <Ok className={ Styles.ok }/>
                                <span>3k</span>
                            </a>
                            <a href="https://www.youtube.com/user/HopeChannelUkraine" className={ Styles.item }>
                                <YouTube className={ Styles.youTube }/>
                                <span>7k</span>
                            </a>
                            <a href="https://www.instagram.com/ua_hope/" className={ Styles.item }>
                                <Instagram className={ Styles.instagram }/>
                                <span>1k</span>
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

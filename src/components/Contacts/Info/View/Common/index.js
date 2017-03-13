/**
 * [IL]
 * Library Import
 */
import React, { Component, PropTypes } from 'react';

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
import Palette from 'components/Assets/Palette';
import ContactUs from '../../Assets/ContactUs';
import Mail from '../../Assets/Mail';
import PhoneAndInternet from '../../Assets/PhoneAndInternet';
import PhoneButton from '../../Assets/PhoneButton';
import PhoneContact from '../../Assets/PhoneContact';
import Skype from '../../Assets/Skype';
import SocialNetworks from '../../Assets/SocialNetworks';
import WriteButton from '../../Assets/WriteButton';
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

class Info extends Component {

    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        social: PropTypes.object.isRequired,
        t: PropTypes.func.isRequired
    };

    /**
     * [CHM-HM]
     * JSDoc for every helper method
     */
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

        /* eslint-disable */
        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://widget.sender.mobi/build/init.js';
            fjs.parentNode.insertBefore(js, fjs, 'sender-widget');
        })(document, 'script');
        /* eslint-enable */
    };

    startChat = (event) => {
        event.preventDefault();
        /* eslint-disable no-undef */
        SenderWidget.showWidget();
        /* eslint-enable no-undef */
    };

    round = (num) => {
        return Math.round(num / 1000);
    };

    /**
     * [CR]
     * Render function
     */
    render() {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType, social, t } = this.props;

        const socialTitle = BP.isTabletPortrait(mediaType) ?
            t('Contacts.Info.searchUs.2')
            : t('Contacts.Info.searchUs.1');

        /**
         * [RR]
         * Return Component
         */
        return (
            <section className={ Grids.container }>
                <section className={ Styles.infoComponent }>
                    <section className={ Styles.live }>
                        <header>
                            <ContactUs color1={ Palette.commonColor2 } color2={ Palette.mainColor3 }/>
                            <h1>{ t('Contacts.Info.communicateOnline') }</h1>
                        </header>
                        <div className={ Styles.chat }>
                            <p>{ t('Contacts.Info.scheduleChat.1') }<b>{ t('Contacts.Info.scheduleChat.2') }</b></p>
                            <a href="#" onClick={ this.startChat }>
                                <WriteButton color={ Palette.mainColor4 }/>
                                { t('Contacts.Info.chatButton') }
                            </a>
                        </div>
                        <div className={ Styles.call }>
                            <p>{ t('Contacts.Info.callCenterSchedule.1') }
                                <b>{ t('Contacts.Info.callCenterSchedule.2') }</b>
                            </p>
                            <a href="skype:contact-hope?call">
                                <PhoneButton color={ Palette.mainColor4 }/>
                                { t('Contacts.Info.callButton') }
                            </a>
                        </div>
                    </section>
                    <section className={ Styles.contacts }>
                        <header>
                            <PhoneAndInternet color1={ Palette.commonColor2 } color2={ Palette.mainColor3 }/>
                            <h1>{ t('Contacts.Info.askUs') }</h1>
                        </header>
                        <div className={ Styles.phone }>
                            <div className={ Styles.row }>
                                <PhoneContact color={ Palette.tempColor26 }/>
                                <span>0 800 30 20 20</span>
                            </div>
                            <div>
                                <p>
                                    { t('Contacts.Info.callEveryDay.1') }<br/>
                                    <b>{ t('Contacts.Info.callEveryDay.2') }</b>
                                </p>
                            </div>
                        </div>
                        <div className={ Styles.skype }>
                            <div className={ Styles.row }>
                                <Skype/>
                                <a href="skype:contact-hope?chat">contact-hope</a>
                            </div>
                            <div>
                                <p>{ t('Contacts.Info.answerSkype.1') }<b>{ t('Contacts.Info.answerSkype.2') }</b></p>
                            </div>
                        </div>
                        <div className={ Styles.mail }>
                            <div className={ Styles.row }>
                                <Mail color={ Palette.tempColor26 }/>
                                <a href="mailto:contact@hope.ua">contact@hope.ua</a>
                            </div>
                            <div>
                                <p>{ t('Contacts.Info.answerMail.1') }<b>{ t('Contacts.Info.answerMail.2') }</b></p>
                            </div>
                        </div>
                    </section>
                    <section className={ Styles.social }>
                        <header>
                            <SocialNetworks color1={ Palette.mainColor3 } color2={ Palette.commonColor2 }/>
                            <h1>{ socialTitle }</h1>
                        </header>
                        <div className={ Styles.list }>
                            <a href={ social.twitter.url } className={ Styles.item }>
                                <Twitter className={ Styles.twitter }/>
                                <span>{ this.round(social.twitter.subscribers) }k</span>
                            </a>
                            <a href={ social.vk.url } className={ Styles.item }>
                                <Vk className={ Styles.vk }/>
                                <span>{ this.round(social.vk.subscribers) }k</span>
                            </a>
                            <a href={ social.facebook.url } className={ Styles.item }>
                                <Facebook className={ Styles.fb }/>
                                <span>{ this.round(social.facebook.subscribers) }k</span>
                            </a>
                            <a href={ social.ok.url } className={ Styles.item }>
                                <Ok className={ Styles.ok }/>
                                <span>{ this.round(social.ok.subscribers) }k</span>
                            </a>
                            <a href={ social.youtube.url } className={ Styles.item }>
                                <YouTube className={ Styles.youTube }/>
                                <span>{ this.round(social.youtube.subscribers) }k</span>
                            </a>
                            <a href={ social.instagram.url } className={ Styles.item }>
                                <Instagram className={ Styles.instagram }/>
                                <span>{ this.round(social.instagram.subscribers) }k</span>
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Info;

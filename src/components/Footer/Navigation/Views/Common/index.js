import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import BreakPoints from 'helpers/breakpoints';

import Palette from 'components/Assets/Palette';
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import Top from 'components/Assets/Icons/Top';

export default function Common(props) {
    const { mediaType, t } = props;

    const info = (
        <section className={ Styles.information }>
            <h1>{ t('Shared.Footer.information') }</h1>
            <ul>
                <li><a href="#">Где нас смотреть?</a></li>
                <li><a href="#">О Телеканале</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </section>
    );

    const networks = (
        <section className={ Styles.networks }>
            { [
                BreakPoints.phonePortrait.name,
                BreakPoints.phoneLandscape.name
            ].indexOf(mediaType) === -1 ? (
                <h1>{ t('Shared.Footer.social') }</h1>
               ) : null }
            <div>
                <a href="#" className={ Styles.youtubeIcon }><YouTube color={ Palette.tempColor8 }/></a>
                <a href="#" className={ Styles.instagramIcon }><Instagram color={ Palette.tempColor10 }/></a>
                <a href="#" className={ Styles.twitterIcon }><Twitter color={ Palette.tempColor12 }/></a>
                <a href="#" className={ Styles.vkIcon }><Vk color={ Palette.tempColor9 }/></a>
                <a href="#" className={ Styles.facebookIcon }><Facebook color={ Palette.tempColor6 }/></a>
                <a href="#" className={ Styles.okIcon }><Ok color={ Palette.tempColor7 }/></a>
            </div>
        </section>
    );

    const rights = (
        <section className={ Styles.rights }>
            <h1>{ t('Shared.Footer.law') }</h1>
            <span><a href="#">{ t('Shared.Footer.ownershipStructure') }</a></span>
        </section>
    );

    const copyright = (
        <footer>
            <div className={ Styles.container }>
                <div className={ Styles.copyright }><strong>{ t('Shared.Footer.copy.1') }</strong>
                    { t('Shared.Footer.copy.2') }
                    <strong>{ t('Shared.Footer.copy.3') }</strong>
                    { t('Shared.Footer.copy.4') }
                </div>
                <div className={ Styles.designer }>{ t('Shared.Footer.design') }</div>
            </div>
            { [
                BreakPoints.phonePortrait.name,
                BreakPoints.phoneLandscape.name
            ].indexOf(mediaType) === -1 ? (
                <a href="#"><Top/></a>
           ) : null }
        </footer>
    );

    return (
        <section className={ Styles.navigationComponent }>
            <div className={ Grids.container }>
                <div className={ Styles.mainContent }>
                    <section className={ Styles.menu }>
                        <h1>{ t('Shared.Footer.menu') }</h1>
                        <ul>
                            <li><a href="#">Все Программы</a></li>
                            <li><a href="#">ТВ Программа</a></li>
                            <li><a href="#">Пожертвовать</a></li>
                            <li><a href="#">ТВ Онлайн</a></li>
                            <li><a href="#">Изучение Библии</a></li>
                        </ul>
                    </section>

                    { [
                        BreakPoints.phonePortrait.name
                    ].indexOf(mediaType) === -1 ? info : null }

                    <section className={ Styles.connection }>
                        <h1>{ t('Shared.Footer.communications') }</h1>
                        <ul>
                            <li><a href="#">{ t('Shared.Footer.call') }</a></li>
                            <li><a href="#">{ t('Shared.Footer.write') }</a></li>
                        </ul>
                    </section>

                    { [
                        BreakPoints.phoneLandscape.name
                    ].indexOf(mediaType) === -1 ? networks : null }

                    <section className={ Styles.phoneNumber }>
                        <h1>{ t('Shared.Footer.phoneNumber') }</h1>
                        <span>{ t('Shared.Footer.address') }</span>
                    </section>

                    { [
                        BreakPoints.phonePortrait.name
                    ].indexOf(mediaType) === -1 ? rights : null }

                    { [
                        BreakPoints.phonePortrait.name,
                        BreakPoints.phoneLandscape.name
                    ].indexOf(mediaType) === -1 ? copyright : null }
                </div>

                { [
                    BreakPoints.phonePortrait.name,
                    BreakPoints.phoneLandscape.name
                ].indexOf(mediaType) !== -1 ? (
                    <div className={ Styles.additionalContent }>
                        { [
                            BreakPoints.phonePortrait.name
                        ].indexOf(mediaType) !== -1 ? info : null }
                        { [
                            BreakPoints.phonePortrait.name
                        ].indexOf(mediaType) !== -1 ? rights : null }
                        { [
                            BreakPoints.phonePortrait.name,
                            BreakPoints.phoneLandscape.name
                        ].indexOf(mediaType) !== -1 ? copyright : null }
                        { [
                            BreakPoints.phoneLandscape.name
                        ].indexOf(mediaType) !== -1 ? networks : null }
                    </div>
               ) : null }
            </div>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired
};

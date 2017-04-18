/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [IA]
 * Assets Import
 */
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import Palette from 'components/Assets/Palette';

function Mobile(props) {
    const { mediaType, t } = props;

    const menu = (
        <div className={ Styles.menu }>
            <h1 className={ Styles.title }>{ t('Footer.Navigation.menu.title') }</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.menu.row-1') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.menu.row-2') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.menu.row-3') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.menu.row-4') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.menu.row-5') }</a>
                </li>
            </ul>
        </div>
    );

    const info = (
        <div className={ Styles.information }>
            <h1 className={ Styles.title }>{ t('Footer.Navigation.information.title') }</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.information.row-1') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.information.row-2') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.information.row-3') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.information.row-4') }</a>
                </li>
            </ul>
        </div>
    );

    const connection = (
        <div className={ Styles.connection }>
            <h1 className={ Styles.title }>{ t('Footer.Navigation.connection.title') }</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.connection.row-1') }</a>
                </li>
                <li className={ Styles.listItem }>
                    <a href="#" className={ Styles.link }>{ t('Footer.Navigation.connection.row-2') }</a>
                </li>
            </ul>
        </div>
    );

    const phoneNumber = (
        <div className={ Styles.phoneNumber }>
            <h1 className={ Styles.title }>{ t('Footer.Navigation.phoneNumber.title') }</h1>
            <div className={ Styles.item }>{ t('Footer.Navigation.phoneNumber.item') }</div>
        </div>
    );

    const networks = (
        <div className={ Styles.networks }>
            <a href="#" className={ Styles.twitterIcon }><Twitter color={ Palette.tempColor12 }/></a>
            <a href="#" className={ Styles.vkIcon }><Vk color={ Palette.tempColor9 }/></a>
            <a href="#" className={ Styles.facebookIcon }><Facebook color={ Palette.tempColor6 }/></a>
            <a href="#" className={ Styles.okIcon }><Ok color={ Palette.tempColor7 }/></a>
            <a href="#" className={ Styles.youtubeIcon }><YouTube color={ Palette.tempColor8 }/></a>
            <a href="#" className={ Styles.instagramIcon }><Instagram color={ Palette.tempColor10 }/></a>
        </div>
    );

    const rights = (
        <div className={ Styles.rights }>
            <h1 className={ Styles.title }>{ t('Footer.Navigation.rights.title') }</h1>
            <a href="#" className={ Styles.link }>{ t('Footer.Navigation.rights.item') }</a>
        </div>
    );

    const copyright = (
        <div className={ Styles.container }>
            <div className={ Styles.copyright }>
                <strong>2009-2017</strong>
                { t('Footer.Navigation.footer.copyright.1') }
                <strong>«Надія»</strong>
                { t('Footer.Navigation.footer.copyright.2') }
            </div>
            <div className={ Styles.designer }>{ t('Footer.Navigation.footer.designer') }</div>
        </div>
    );

    const col1 = (
        <div className={ Styles.col1 }>
            { menu }
        </div>
    );

    const col2 = (
        <div className={ Styles.col2 }>
            { BP.isPhoneLandscape(mediaType) ? info : null }
            { BP.isPhonePortrait(mediaType) ? connection : null }
            { BP.isPhonePortrait(mediaType) ? phoneNumber : null }
        </div>
    );

    const col3 = (
        <div className={ Styles.col3 }>
            { BP.isPhonePortrait(mediaType) ? info : null }
            { BP.isPhoneLandscape(mediaType) ? connection : null }
            { BP.isPhoneLandscape(mediaType) ? phoneNumber : null }
        </div>
    );

    const col4 = (
        <div className={ Styles.col4 }>
            { rights }
            { BP.isPhonePortrait(mediaType) ? copyright : null }
        </div>
    );

    return (
        <section className={ Styles.navigationComponent }>
            <section className={ Grids.container }>
                <section className={ Styles.mainContent }>
                    <div className={ Styles.columns }>
                        { col1 }
                        { col2 }
                        { BP.isPhoneLandscape(mediaType) ? col3 : null }
                        { BP.isPhoneLandscape(mediaType) ? col4 : null }
                    </div>
                    <div className={ Styles.footer }>
                        { BP.isPhonePortrait(mediaType) ? networks : null }
                    </div>
                </section>
                <section className={ Styles.additionalContent }>
                    { BP.isPhoneLandscape(mediaType) ? copyright : null }
                    { BP.isPhoneLandscape(mediaType) ? networks : null }
                    { BP.isPhonePortrait(mediaType) ? col3 : null }
                    { BP.isPhonePortrait(mediaType) ? col4 : null }
                </section>
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Mobile.propTypes = {
    mediaType: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default Mobile;

import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

import Logo from '../../Assets/Logo';
import Palette from 'components/Assets/Palette';
import Hamburger from '../../Assets/Hamburger';
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import MenuLive from '../../Assets/MenuLive';

export default function Header(props) {
    const {
        handleMenu,
        isMenuVisible,
        locale,
        socialLinks,
        getMenuItems
    } = props;

    const ukClass = cx({
        [Styles.active]: locale === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: locale === 'ru',
        [Styles.language]: true
    });

    const dynamicStyle = {
        display: isMenuVisible ? 'flex' : 'none'
    };

    const convertToComponent = (el) => {
        const target = el.external ? {
            'target': '_blank',
            'rel': 'noopener noreferrer'
        } : null;

        const liveIcon = el.id === 'live' ? (
            <MenuLive className={ Styles.liveIcon } color={ Palette.mainColor3 }/>
        ) : null;

        return (
            <li key={ el.id }>
                { liveIcon }
                <a { ...target } href={ el.url }>{ el.title[locale] }</a>
            </li>
        );
    };

    const subMenuItems = getMenuItems('sub').map(convertToComponent);
    const mainMenuItems = getMenuItems('main').map(convertToComponent);

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.header }>
                <Logo className={ Styles.logo } color={ Palette.tempColor26 }/>
                <ul className={ Styles.menu }>
                    { mainMenuItems }
                </ul>
                <Hamburger
                    className={ Styles.hamburger }
                    color={ Palette.tempColor26 }
                    isOpened={ isMenuVisible }
                    onClick={ handleMenu }
                />
            </div>
            <div className={ Styles.popup } style={ dynamicStyle }>
                <div className={ Styles.content }>
                    <ul className={ Styles.menu } >
                        { subMenuItems }
                    </ul>
                    <div className={ Styles.footer }>
                        <div className={ Styles.social }>
                            <a href={ socialLinks.youtube } className={ Styles.youtubeIcon }>
                                <YouTube color={ Palette.tempColor8 }/>
                            </a>
                            <a href={ socialLinks.instagram } className={ Styles.instagramIcon }>
                                <Instagram color={ Palette.tempColor10 }/>
                            </a>
                            <a href={ socialLinks.twitter } className={ Styles.twitterIcon }>
                                <Twitter color={ Palette.tempColor12 }/>
                            </a>
                            <a href={ socialLinks.vk } className={ Styles.vkIcon }>
                                <Vk color={ Palette.tempColor9 }/>
                            </a>
                            <a href={ socialLinks.facebook } className={ Styles.facebookIcon }>
                                <Facebook color={ Palette.tempColor6 }/>
                            </a>
                            <a href={ socialLinks.ok } className={ Styles.okIcon }>
                                <Ok color={ Palette.tempColor7 }/>
                            </a>
                        </div>
                        <div className={ Styles.languages }>
                            <span className={ Styles.choose }>Язык сайта:</span>
                            <a className={ ruClass } href="/ru">Русский</a>
                            <a className={ ukClass } href="/uk">Украинский</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    handleMenu: PropTypes.func.isRequired,
    isMenuVisible: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    getMenuItems: PropTypes.func.isRequired
};

Header.defaultProps = {
    isMenuVisible: false
};

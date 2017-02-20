import React, { PropTypes } from 'react';
import cx from 'classnames';
import Styles from './Styles/main.scss';

import Instagram from 'components/Assets/Social/instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import Logo from 'components/Assets/Icons/Logo';
import Hamburger from 'components/Assets/Icons/Hamburger';

import Palette from 'components/Assets/Palette';

export default function Header(props) {
    const {
        handleMenu,
        isMenuVisible,
        locale,
        socialLinks,
        menu,
        sortMenu,
        filterMenu
    } = props;

    if (window) {
        const $body = document.getElementsByTagName('body');
        const $content = document.getElementById('content');

        if (isMenuVisible) {
            $content.style.height = '0';
            $content.style.overflow = 'hidden';
            $body[0].style.background = Palette.commonColor10;
        } else {
            $content.style.height = null;
            $content.style.overflow = null;
            $body[0].style.background = null;
        }
    }

    const stylePopup = {
        display: isMenuVisible ? 'block' : 'none'
    };

    const componentStyle = {
        position: isMenuVisible ? 'absolute' : 'static'
    };

    const ukClass = cx({
        [Styles.active]: locale === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: locale === 'ru',
        [Styles.language]: true
    });

    const itemsMenu1 = menu.items
        .filter(filterMenu('main'))
        .sort(sortMenu('main'))
        .map((el) => {
            const target = el.external ? {
                'target': '_blank',
                'rel': 'noopener noreferrer'
            } : null;

            return (
                <li key={ el.id }>
                    <a { ...target } href={ el.url }>{ el.title[locale] }</a>
                </li>
            );
        });

    const itemsMenu2 = menu.items
        .filter(filterMenu('sub'))
        .sort(sortMenu('sub'))
        .map((el) => {
            const target = el.external ? {
                'target': '_blank',
                'rel': 'noopener noreferrer'
            } : null;

            return (
                <li key={ el.id }>
                    <a { ...target } href={ el.url }>{ el.title[locale] }</a>
                </li>
            );
        });

    return (
        <section className={ Styles.headerComponent } style={ componentStyle }>
            <div className={ Styles.head }>
                <a href="#"><Logo color={ Palette.mainColor1 }/></a>
                <span onClick={ handleMenu }>
                    <Hamburger isOpened={ isMenuVisible } color={ Palette.mainColor1 }/>
                </span>
            </div>
            <div className={ Styles.popup } style={ stylePopup }>
                <div className={ Styles.lists }>
                    <ul className={ Styles.menu1 }>
                        { itemsMenu1 }
                    </ul>
                    <ul className={ Styles.menu2 }>
                        { itemsMenu2 }
                    </ul>
                </div>
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
                        <a className={ ruClass } href="https://tv.hope.ua/ru">Русский</a>
                        <a className={ ukClass } href="https://tv.hope.ua/uk">Украинский</a>
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
    menu: PropTypes.object.isRequired,
    sortMenu: PropTypes.func.isRequired,
    filterMenu: PropTypes.func.isRequired
};

Header.defaultProps = {
    isMenuVisible: false
};

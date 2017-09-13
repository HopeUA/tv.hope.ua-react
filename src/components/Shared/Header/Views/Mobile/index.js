/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';

/**
 * [IS]
 * Style Import
 */
import Styles from './Styles/main.scss';

/**
 * [IA]
 * Assets Import
 */
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Logo from '../../Assets/Logo';
import Hamburger from '../../Assets/Hamburger';
import Palette from 'components/Assets/Palette';

function Header(props) {
    const {
        handleMenu,
        isMenuVisible,
        locale,
        socialLinks,
        getMenuItems
    } = props;

    if (window) {
        const $body = document.getElementsByTagName('body').item(0);
        const $content = document.getElementById('content');

        if (isMenuVisible) {
            $content.style.height = 0;
            $content.style.overflow = 'hidden';
            $body.style.background = Palette.commonColor10;
        } else {
            $content.style.height = null;
            $content.style.overflow = null;
            $body.style.background = null;
        }
    }

    const popupStyle = {
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

    const convertToComponent = (el) => {
        const target = el.external ? {
            'target': '_blank',
            'rel': 'noopener noreferrer'
        } : null;

        return (
            <li key={ el.id }>
                <a { ...target } href={ el.url }>{ el.title[locale] }</a>
            </li>
        );
    };

    const subMenuItems = getMenuItems('sub').map(convertToComponent);
    const mainMenuItems = getMenuItems('main').map(convertToComponent);

    return (
        <section className={ Styles.headerComponent } style={ componentStyle }>
            <div className={ Styles.head }>
                <a href="#"><Logo color={ Palette.mainColor1 }/></a>
                <span onClick={ handleMenu }>
                    <Hamburger isOpened={ isMenuVisible } color={ Palette.mainColor1 }/>
                </span>
            </div>
            <div className={ Styles.popup } style={ popupStyle }>
                <div className={ Styles.lists }>
                    <ul className={ Styles.menu1 }>
                        { mainMenuItems }
                    </ul>
                    <ul className={ Styles.menu2 }>
                        { subMenuItems }
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
                        <a href={ socialLinks.facebook } className={ Styles.facebookIcon }>
                            <Facebook color={ Palette.tempColor6 }/>
                        </a>
                    </div>
                    <div className={ Styles.languages }>
                        <span className={ Styles.choose }>Язык сайта:</span>
                        <a className={ ruClass } href="/ru/thanksgiving">Русский</a>
                        <a className={ ukClass } href="/uk/thanksgiving">Українська</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Header.propTypes = {
    handleMenu: PropTypes.func.isRequired,
    isMenuVisible: PropTypes.bool,
    locale: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    getMenuItems: PropTypes.func.isRequired
};

/**
 * [CDP]
 * Component default props
 */
Header.defaultProps = {
    isMenuVisible: false
};

/**
 * [IE]
 * Export
 */
export default Header;

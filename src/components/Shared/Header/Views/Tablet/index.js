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
import Logo from '../../Assets/Logo';
import Palette from 'components/Assets/Palette';
import Hamburger from '../../Assets/Hamburger';
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import MenuLive from '../../Assets/MenuLive';

function Header(props) {
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

    let url;
    if (location) {
        url = location.pathname.split('/')
            .filter((item, idx) => {
                return idx !== 1;
            })
            .join('/');
    }

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.header }>
                <a href="https://tv.hope.ua/">
                    <Logo className={ Styles.logo } color={ Palette.tempColor26 }/>
                </a>
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
                            <a href={ socialLinks.facebook } className={ Styles.facebookIcon }>
                                <Facebook color={ Palette.tempColor6 }/>
                            </a>
                        </div>
                        <div className={ Styles.languages }>
                            <span className={ Styles.choose }>Язык сайта:</span>
                            <a className={ ruClass } href={ `/ru${url}` }>Русский</a>
                            <a className={ ukClass } href={ `/uk${url}` }>Українська</a>
                        </div>
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

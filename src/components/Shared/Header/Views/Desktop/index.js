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
import Grids from 'theme/Grid.scss';

/**
 * [IA]
 * Assets Import
 */
import Instagram from '../../Assets/Social/Instagram';
import Facebook from '../../Assets/Social/Fb';
import Twitter from '../../Assets/Social/Tw';
import YouTube from '../../Assets/Social/YouTube';
import Logo from '../../Assets/Logo';
import MenuLive from '../../Assets/MenuLive';
import Worldwide from '../../Assets/Worldwide';
import Palette from 'components/Assets/Palette';

function Header(props) {
    const {
        locale,
        socialLinks,
        getWorldwideItem,
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
    const worldwideData = getWorldwideItem();

    return (
        <section className={ Grids.container }>
            <section className={ Styles.headerComponent }>
                <div className={ Styles.top }>
                    <a href={ worldwideData.url } className={ Styles.worldwideChannel }>
                        <Worldwide color={ Palette.tempColor22 }/>
                        { worldwideData.title[locale] }
                    </a>
                    <div className={ Styles.wrap }>
                        <ul className={ Styles.subMenu }>
                            { subMenuItems }
                        </ul>
                        <div className={ Styles.social }>
                            <a href={ socialLinks.youtube } className={ Styles.youTube }>
                                <YouTube color={ Palette.tempColor22 }/>
                            </a>
                            <a href={ socialLinks.instagram } className={ Styles.instagram }>
                                <Instagram color={ Palette.tempColor22 }/>
                            </a>
                            <a href={ socialLinks.twitter } className={ Styles.twitter }>
                                <Twitter color={ Palette.tempColor22 }/>
                            </a>
                            <a href={ socialLinks.facebook } className={ Styles.fb }>
                                <Facebook color={ Palette.tempColor22 }/>
                            </a>
                        </div>
                        <div className={ Styles.languages }>
                            <a href="/ru/thanksgiving" className={ ruClass }>Рус</a>
                            <span className={ Styles.slash }>/</span>
                            <a href="/uk/thanksgiving" className={ ukClass }>Укр</a>
                        </div>
                    </div>
                </div>
                <div className={ Styles.main }>
                    <Logo className={ Styles.logo } color={ Palette.mainColor1 }/>
                    <ul className={ Styles.menu }>
                        { mainMenuItems }
                    </ul>
                </div>
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Header.propTypes = {
    locale: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    getWorldwideItem: PropTypes.func.isRequired,
    getMenuItems: PropTypes.func.isRequired
};

/**
 * [IE]
 * Export
 */
export default Header;

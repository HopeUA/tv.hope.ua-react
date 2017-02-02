import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import Grids from 'theme/Grid.scss';
import cx from 'classnames';

import Instagram from 'components/Assets/SocialFlat/instagram';
import Facebook from 'components/Assets/SocialFlat/Fb';
import Twitter from 'components/Assets/SocialFlat/Tw';
import YouTube from 'components/Assets/SocialFlat/YouTube';
import Vk from 'components/Assets/SocialFlat/Vk';
import Logo from 'components/Assets/Icons/Logo';
import Palette from 'components/Assets/Palette';
import MenuLive from 'components/Assets/Icons/menuLive';
import Earth from 'components/Assets/Icons/Worldwide';

export default function Header(props) {
    const { language, socialLinks, menu, priorityFilter } = props;

    const ukClass = cx({
        [Styles.active]: language === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: language === 'ru',
        [Styles.language]: true
    });

    const subMenu = menu.sub
        .filter(priorityFilter).map((el) => {
            const target = el.external ? {
                'target': '_blank',
                'rel': 'noopener noreferrer'
            } : null;

            return (
                <li key={ el.id }>
                    <a { ...target } href={ el.url }>{ el.title }</a>
                </li>
            );
        });

    const mainMenu = menu.main
        .map((el) => {
            const target = el.external ? {
                target: '_blank',
                rel: 'noopener noreferrer'
            } : null;

            const liveIcon = el.id === 'live' ? (
                <MenuLive className={ Styles.liveIcon } color={ Palette.paletteColor1 }/>
            ) : null;

            return (
                <li key={ el.id }>
                    { liveIcon }
                    <a { ...target } href={ el.url }>{ el.title }</a>
                </li>
            );
        })
    ;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.headerComponent }>
                <div className={ Styles.top }>
                    <a href="#" className={ Styles.worldwideChannel }>
                        <Earth/>
                        Всемирный HopeChannel
                    </a>
                    <ul className={ Styles.subMenu }>
                        { subMenu }
                    </ul>
                    <div className={ Styles.social }>
                        <a href={ socialLinks.youtube } className={ Styles.youTube }>
                            <YouTube/>
                        </a>
                        <a href={ socialLinks.instagram } className={ Styles.instagram }>
                            <Instagram/>
                        </a>
                        <a href={ socialLinks.twitter } className={ Styles.twitter }>
                            <Twitter/>
                        </a>
                        <a href={ socialLinks.vk } className={ Styles.vk }>
                            <Vk/>
                        </a>
                        <a href={ socialLinks.facebook } className={ Styles.fb }>
                            <Facebook/>
                        </a>
                    </div>
                    <div className={ Styles.languages }>
                        <span className={ ruClass }>Рус</span>
                        <span className={ Styles.slash }>/</span>
                        <span className={ ukClass }>Укр</span>
                    </div>
                </div>
                <div className={ Styles.main }>
                    <Logo className={ Styles.logo } color={ Palette.paletteColor6 }/>
                    <ul className={ Styles.menu }>
                        { mainMenu }
                    </ul>
                </div>
            </section>
        </section>
    );
}

Header.propTypes = {
    language: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    priorityFilter: PropTypes.function.isRequired
};

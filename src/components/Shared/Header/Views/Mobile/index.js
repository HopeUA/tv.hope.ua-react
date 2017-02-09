import React, { PropTypes } from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

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
    const { handleMenu, isMenuVisible, language, socialLinks, menu, priorityFilter } = props;

    const style = {
        visibility: isMenuVisible ? 'visible' : 'hidden'
    };

    const ukClass = cx({
        [Styles.active]: language === 'uk',
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: language === 'ru',
        [Styles.language]: true
    });

    const itemsMenu1 = menu.main.map((el) => {
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

    const itemsMenu2 = menu.sub
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

    console.log(socialLinks);

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.head }>
                <a href="#"><Logo color={ Palette.mainColor1 }/></a>
                <span onClick={ handleMenu }>
                    <Hamburger isOpened={ isMenuVisible } color={ Palette.mainColor1 }/>
                </span>
            </div>
            <div className={ Styles.popup } style={ style }>
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
                        <span className={ ruClass }>Русский</span>
                        <span className={ ukClass }>Украинский</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    handleMenu: PropTypes.func.isRequired,
    isMenuVisible: PropTypes.boolean,
    language: PropTypes.string.isRequired,
    socialLinks: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    priorityFilter: PropTypes.func.isRequired
};

Header.defaultProps = {
    isMenuVisible: false
};

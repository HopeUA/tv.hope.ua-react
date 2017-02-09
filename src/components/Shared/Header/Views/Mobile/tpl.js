import React, { PropTypes } from 'react';
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
    const { handleMenu, isMenuVisible } = props;

    const popupStyle = {
        position: 'static',
        visibility: isMenuVisible ? 'visible' : 'hidden'
    };

    return (
        <section className={ Styles.headerComponent }>
            <div className={ Styles.head }>
                <a href="#"><Logo color={ Palette.mainColor1 }/></a>
                <span onClick={ handleMenu }>
                    <Hamburger isOpened={ isMenuVisible } color={ Palette.mainColor1 }/>
                </span>
            </div>
            <div className={ Styles.popup } style={ popupStyle }>
                <div className={ Styles.lists }>
                    <ul className={ Styles.menu1 }>
                        <li>
                            <a href="#">Все программы</a>
                        </li>
                        <li>
                            <a href="#">ТВ программа</a>
                        </li>
                        <li>
                            <a href="#">Пожертвовать</a>
                        </li>
                        <li>
                            <a href="#">ТВ Онлайн</a>
                        </li>
                    </ul>
                    <ul className={ Styles.menu2 }>
                        <li>
                            <a href="#">Новости</a>
                        </li>
                        <li>
                            <a href="#">Где нас смотреть?</a>
                        </li>
                        <li>
                            <a href="#">О Телеканале</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
                <div className={ Styles.footer }>
                    <div className={ Styles.social }>
                        <a href="#" className={ Styles.youtubeIcon }><YouTube/></a>
                        <a href="#" className={ Styles.instagramIcon }><Instagram/></a>
                        <a href="#" className={ Styles.twitterIcon }><Twitter/></a>
                        <a href="#" className={ Styles.vkIcon }><Vk/></a>
                        <a href="#" className={ Styles.facebookIcon }><Facebook/></a>
                        <a href="#" className={ Styles.okIcon }><Ok/></a>
                    </div>
                    <div className={ Styles.languages }>
                        <span className={ Styles.choose }>Язык сайта:</span>
                        <span className={ Styles.active }>Русский</span>
                        <span className={ Styles.language }>Украинский</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    handleMenu: PropTypes.func.isRequired,
    isMenuVisible: PropTypes.boolean.isRequired
};

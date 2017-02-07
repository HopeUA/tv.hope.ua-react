import React from 'react';
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
import Worldwide from 'components/Assets/Icons/Worldwide';

export default function Header() {
    const ukClass = cx({
        [Styles.active]: true,
        [Styles.language]: true
    });

    const ruClass = cx({
        [Styles.active]: false,
        [Styles.language]: true
    });

    return (
        <section className={ Grids.container }>
            <section className={ Styles.headerComponent }>
                <div className={ Styles.top }>
                    <a href="#" className={ Styles.worldwideChannel }>
                        <Worldwide color={ Palette.paletteColor12 }/>
                        Всемирный HopeChannel
                    </a>
                    <ul className={ Styles.subMenu }>
                        <li>
                            <a href="#">Где нас смотреть</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                    </ul>
                    <div className={ Styles.social }>
                        <a href="#">
                            <YouTube className={ Styles.youTube }/>
                        </a>
                        <a href="#">
                            <Facebook className={ Styles.fb }/>
                        </a>
                        <a href="#">
                            <Vk className={ Styles.vk }/>
                        </a>
                        <a href="#">
                            <Twitter className={ Styles.twitter }/>
                        </a>
                        <a href="#">
                            <Instagram className={ Styles.instagram }/>
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
                        <li>
                            <a href="#">Все программы</a>
                        </li>
                        <li>
                            <a href="#">ТВ Программа</a>
                        </li>
                        <li>
                            <a href="#">Пожертвовать</a>
                        </li>
                        <li>
                            <a href="#">Новости</a>
                        </li>
                        <li>
                            <MenuLive color={ Palette.paletteColor1 }/>
                            <a href="#">ТВ Онлайн</a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

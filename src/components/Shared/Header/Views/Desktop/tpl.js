/**
 * [IL]
 * Library Import
 */
import React from 'react';
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
import Vk from '../../Assets/Social/Vk';
import Logo from '../../Assets/Logo';
import MenuLive from '../../Assets/MenuLive';
import Worldwide from '../../Assets/Worldwide';
import Palette from 'components/Assets/Palette';

function Header() {
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
                        <Worldwide color={ Palette.tempColor22 }/>
                        Всемирный HopeChannel
                    </a>
                    <ul className={ Styles.subMenu }>
                        <li>
                            <a href="#">Где нас смотреть</a>t
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
                    <Logo className={ Styles.logo } color={ Palette.mainColor1 }/>
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
                            <MenuLive color={ Palette.mainColor3 }/>
                            <a href="#">ТВ Онлайн</a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Header;

import React from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

import Logo from 'components/Assets/Icons/Logo';
import Palette from 'components/Assets/Palette';
import Hamburger from 'components/Assets/Icons/Hamburger';
import Instagram from 'components/Assets/Social/instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import MenuLive from 'components/Assets/Icons/menuLive';

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
        <section className={ Styles.headerComponent }>
            <div className={ Styles.header }>
                <Logo className={ Styles.logo } color={ Palette.tempColor26 }/>
                <ul className={ Styles.menu }>
                    <li>
                        <a href="#">Все программы</a>
                    </li>
                    <li>
                        <a href="#">ТВ Программа</a>
                    </li>
                    <li>
                        <MenuLive className={ Styles.liveIcon } color={ Palette.mainColor3 }/>
                        <a href="#">ТВ Онлайн</a>
                    </li>
                </ul>
                <Hamburger className={ Styles.hamburger } color={ Palette.tempColor26 }/>
            </div>
            <div className={ Styles.popup }>
                <div className={ Styles.content }>
                    <ul className={ Styles.menu } >
                        <li>
                            <a href="#">
                                Где нас смотреть?
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Новости
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Пожертвовать
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                О Телеканале
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    <div className={ Styles.footer }>
                        <div className={ Styles.social }>
                            <a href="#" className={ Styles.youtubeIcon }>
                                <YouTube color={ Palette.tempColor8 }/>
                            </a>
                            <a href="#" className={ Styles.instagramIcon }>
                                <Instagram color={ Palette.tempColor10 }/></a>
                            <a href="#" className={ Styles.twitterIcon }>
                                <Twitter color={ Palette.tempColor12 }/>
                            </a>
                            <a href="#" className={ Styles.vkIcon }>
                                <Vk color={ Palette.tempColor9 }/>
                            </a>
                            <a href="#" className={ Styles.facebookIcon }>
                                <Facebook color={ Palette.tempColor6 }/>
                            </a>
                            <a href="#" className={ Styles.okIcon }>
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
            </div>
        </section>
    );
}

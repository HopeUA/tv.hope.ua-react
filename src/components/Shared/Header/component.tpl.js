import React, { PropTypes } from 'react';
import Styles from './main.scss';
import Grids from 'theme/Grid.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';
import InlineSvg from 'components/InlineSvg/component';

import SvgLogo from 'components/Shared/Header/Assets/logo.svg';
import SvgMenuHamburger from 'components/Shared/Header/Assets/menuHamburger.svg';
// import SvgMenuClose from 'components/Shared/Header/Assets/menuClose.svg';
import SvgSocialFacebook from 'components/Shared/Header/Assets/socialFacebook.svg';
import SvgSocialInstagram from 'components/Shared/Header/Assets/socialInstagram.svg';
import SvgSocialOk from 'components/Shared/Header/Assets/socialOk.svg';
import SvgSocialTwitter from 'components/Shared/Header/Assets/socialTwitter.svg';
import SvgSocialVk from 'components/Shared/Header/Assets/socialVk.svg';
import SvgSocialYoutube from 'components/Shared/Header/Assets/socialYoutube.svg';
import SvgWorldwide from 'components/Shared/Header/Assets/worldwide.svg';
import SvgLangArrow from 'components/Shared/Header/Assets/langArrow.svg';

export default function Header(props) {
    const templates = [
        BreakPoints.phonePortrait.name,
        BreakPoints.phoneLandscape.name,
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name,
        BreakPoints.desktop.name
    ];

    const { mediaType } =  props;

    const mobile = (
        [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(mediaType) !== -1 ? (
            <div>
                <header>
                    <a className={ Styles.logo }>
                        <InlineSvg content={ SvgLogo }/>
                    </a>
                    <a className={ Styles.menu }>
                        <InlineSvg content={ SvgMenuHamburger }/>
                    </a>
                    {/* <a href="" className={ Styles.close }>
                     <InlineSvg content={ SvgMenuClose }/>
                     </a> */}
                </header>
                <div className={ Styles.wrap }>
                    <ul className={ Styles.main }>
                        <li><a href="#">Все программы</a></li>
                        <li><a href="#">ТВ Программа</a></li>
                        <li className={ Styles.donation }>
                            <a href="#">Пожертвовать</a>
                        </li>
                        <li><a href="#">ТВ Онлайн</a></li>
                    </ul>
                    <ul className={ Styles.sub }>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Где нас смотреть?</a></li>
                        <li><a href="#">О Телеканале</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <div className={ Styles.social }>
                        <a href="#" className={ Styles.youtube }>
                            <InlineSvg content={ SvgSocialYoutube }/>
                        </a>
                        <a href="#" className={ Styles.instagram }>
                            <InlineSvg content={ SvgSocialInstagram }/>
                        </a>
                        <a href="#" className={ Styles.twitter }>
                            <InlineSvg content={ SvgSocialTwitter }/>
                        </a>
                        <a href="#" className={ Styles.vk }>
                            <InlineSvg content={ SvgSocialVk }/>
                        </a>
                        <a href="#" className={ Styles.fb }>
                            <InlineSvg content={ SvgSocialFacebook }/>
                        </a>
                        <a href="#" className={ Styles.ok }>
                            <InlineSvg content={ SvgSocialOk }/>
                        </a>
                    </div>
                    <div className={ Styles.languages }>
                        <span>Язык сайта:</span>
                        <a href="#" className={ Styles.ru }>Русский</a>
                        <a href="#" className={ Styles.ua }>Украинский</a>
                    </div>
                </div>
            </div>
        ) : null
    );

    const tabletPortrait = (
        [
            BreakPoints.tabletPortrait.name
        ].indexOf(mediaType) !== -1 ? (
            <div>
                <header>
                    <a className={ Styles.logo }>
                        <InlineSvg content={ SvgLogo }/>
                    </a>
                    <ul className={ Styles.main }>
                        <li><a href="#">Все программы</a></li>
                        <li><a href="#">ТВ Программа</a></li>
                        <li><a href="#">ТВ Онлайн</a></li>
                    </ul>
                    <a className={ Styles.menu }>
                        <InlineSvg content={ SvgMenuHamburger }/>
                    </a>
                    {/* <a href="" className={ Styles.close }>
                     <InlineSvg content={ SvgMenuClose }/>
                     </a> */}
                </header>
                <div className={ Styles.wrap }>
                    <ul className={ Styles.sub }>
                        <li><a href="#">Где нас смотреть?</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Пожертвовать</a></li>
                        <li><a href="#">О Телеканале</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <div className={ Styles.social }>
                        <a href="#" className={ Styles.youtube }>
                            <InlineSvg content={ SvgSocialYoutube }/>
                        </a>
                        <a href="#" className={ Styles.instagram }>
                            <InlineSvg content={ SvgSocialInstagram }/>
                        </a>
                        <a href="#" className={ Styles.twitter }>
                            <InlineSvg content={ SvgSocialTwitter }/>
                        </a>
                        <a href="#" className={ Styles.vk }>
                            <InlineSvg content={ SvgSocialVk }/>
                        </a>
                        <a href="#" className={ Styles.fb }>
                            <InlineSvg content={ SvgSocialFacebook }/>
                        </a>
                        <a href="#" className={ Styles.ok }>
                            <InlineSvg content={ SvgSocialOk }/>
                        </a>
                    </div>
                    <div className={ Styles.languages }>
                        <span>Язык сайта:</span>
                        <a href="#" className={ Styles.ru }>Русский</a>
                        <a href="#" className={ Styles.ua }>Украинский</a>
                    </div>
                </div>
            </div>
        ) : null
    );

    const desktop = (
        [
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name,
            BreakPoints.desktopWide.name,
            BreakPoints.desktopHD.name,
            BreakPoints.desktopMega.name
        ].indexOf(mediaType) !== -1 ? (
            <div>
                <header>
                    <div className={ Grids.container }>
                        <a href="#" className={ Styles.world }>
                            <InlineSvg content={ SvgWorldwide }/>
                            <span>Всемирный HopeChannel</span>
                        </a>
                        <ul className={ Styles.sub }>
                            <li>Где нас <a href="#"><span>смотреть</span><span> →</span></a></li>
                            <li><a href="#">О телеканале</a></li>
                            <li><a href="#">Изучение Библии</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#" className={ Styles.selected }>Контакты</a></li>
                        </ul>
                        <ul className={ Styles.social }>
                            <li><a href="#" className={ Styles.youtube }></a></li>
                            <li><a href="#" className={ Styles.twitter }></a></li>
                            <li><a href="#" className={ Styles.vk }></a></li>
                            <li><a href="#" className={ Styles.fb }></a></li>
                        </ul>
                    </div>
                </header>
                <div className={ Styles.wrap }>
                    <div className={ Grids.container }>
                        <a className={ Styles.logo }>
                            <InlineSvg content={ SvgLogo }/>
                        </a>
                        <ul className={ Styles.main }>
                            <li><a href="#" className={ Styles.selected }>Все программы</a></li>
                            <li><a href="#">ТВ Программа</a></li>
                            <li><a href="#">Пожертвовать</a></li>
                            <li><a href="#">ТВ Онлайн</a></li>
                        </ul>
                        <div className={ Styles.languages }>
                            <a href="#" className={ Styles.ru }></a>
                            <InlineSvg className={ Styles.topArrow } content={ SvgLangArrow }/>
                            <InlineSvg className={ Styles.bottomArrow } content={ SvgLangArrow }/>
                            <a href="#" className={ Styles.ua }></a>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );

    return (
        <PixelPerfect templates={ templates } component="header">
            <section className={ Styles.headerComponent }>
                { mobile }
                { tabletPortrait }
                { desktop }
            </section>
        </PixelPerfect>
    );
}

Header.propTypes = {
    mediaType: PropTypes.string.isRequired
};


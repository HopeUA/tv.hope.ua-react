/**
 * [IL]
 * Library Import
 */
import React from 'react';

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
import Instagram from 'components/Assets/Social/Instagram';
import Facebook from 'components/Assets/Social/Fb';
import Twitter from 'components/Assets/Social/Tw';
import YouTube from 'components/Assets/Social/YouTube';
import Ok from 'components/Assets/Social/Ok';
import Vk from 'components/Assets/Social/Vk';
import Top from 'components/Assets/Icons/Top';
import Palette from 'components/Assets/Palette';

function Desktop() {
    const menu = (
        <div className={ Styles.menu }>
            <h1 className={ Styles.title }>Меню</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Все Программы</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>ТВ Программа</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Пожертвовать</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>ТВ Онлайн</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Изучение Библии</a></li>
            </ul>
        </div>
    );

    const info = (
        <div className={ Styles.information }>
            <h1 className={ Styles.title }>Информация</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Где нас смотреть?</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>О Телеканале</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Новости</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Контакты</a></li>
            </ul>
        </div>
    );

    const connection = (
        <div className={ Styles.connection }>
            <h1 className={ Styles.title }>Связь</h1>
            <ul className={ Styles.list }>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Позвонить нам сейчас</a></li>
                <li className={ Styles.listItem }><a href="#" className={ Styles.link }>Написать в онлайн чат</a></li>
            </ul>
        </div>
    );

    const phoneNumber = (
        <div className={ Styles.phoneNumber }>
            <h1 className={ Styles.title }>0 (800) 50 157 80</h1>
            <div className={ Styles.item }>Киев, 04071, а/я 36</div>
        </div>
    );

    const networks = (
        <div className={ Styles.networks }>
            <h1 className={ Styles.title }>Соц. сети</h1>
            <div className={ Styles.row } >
                <a href="#" className={ Styles.twitterIcon }><Twitter color={ Palette.tempColor12 }/></a>
                <a href="#" className={ Styles.vkIcon }><Vk color={ Palette.tempColor9 }/></a>
                <a href="#" className={ Styles.facebookIcon }><Facebook color={ Palette.tempColor6 }/></a>
                <a href="#" className={ Styles.okIcon }><Ok color={ Palette.tempColor7 }/></a>
                <a href="#" className={ Styles.youtubeIcon }><YouTube color={ Palette.tempColor8 }/></a>
                <a href="#" className={ Styles.instagramIcon }><Instagram color={ Palette.tempColor10 }/></a>
            </div>
        </div>
    );

    const rights = (
        <div className={ Styles.rights }>
            <h1 className={ Styles.title }>Права</h1>
            <a href="#" className={ Styles.link }>Інформація про структуру власності</a>
        </div>
    );

    const footer = (
        <section className={ Styles.footer }>
            <div className={ Styles.container }>
                <div className={ Styles.copyright }>
                    <strong>2009-2017</strong> Телеканал<strong> «Надія»</strong>. Всі права захищені.
                </div>
                <div className={ Styles.designer }>Дизайн: Мирослав Джулай</div>
            </div>
            <div className={ Styles.toTop }>
                <a href="#"><Top/></a>
            </div>
        </section>
    );

    return (
        <section className={ Styles.navigationComponent }>
            <section className={ Grids.container }>
                <section className={ Styles.mainContent }>
                    <div className={ Styles.col1 }>
                        { menu }
                    </div>
                    <div className={ Styles.col2 }>
                        { info }
                    </div>
                    <div className={ Styles.col3 }>
                        { connection }
                        { phoneNumber }
                    </div>
                    <div className={ Styles.col4 }>
                        { networks }
                        { rights }
                    </div>
                </section>
                { footer }
            </section>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Desktop;

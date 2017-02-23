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

/**
 * [IA]
 * Assets Import
 */
import PlaySmall from 'components/Assets/Icons/PlaySmall';
import Palette from 'components/Assets/Palette';

function Mobile() {
    return (
        <section className={ Styles.liveComponent }>
            <a href="#">
                <PlaySmall color={ Palette.mainColor1 } className={ Styles.play }/>
                Смотреть ТВ «Надія» Онлайн
            </a>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Mobile;

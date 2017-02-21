import React from 'react';

import Styles from './Styles/main.scss';

import PlaySmall from 'components/Assets/Icons/PlaySmall';
import Palette from 'components/Assets/Palette';

export default function Mobile() {
    return (
        <section className={ Styles.liveComponent }>
            <a href="#">
                <PlaySmall color={ Palette.mainColor1 } className={ Styles.play }/>
                Смотреть ТВ «Надія» Онлайн
            </a>
        </section>
    );
}

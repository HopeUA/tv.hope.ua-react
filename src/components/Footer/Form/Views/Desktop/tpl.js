import React from 'react';
import Styles from './Styles/main.scss';
import PixelPerfect from 'components/PixelPerfect/component';
import BreakPoints from 'components/PixelPerfect/breakpoints';

import Palette from 'components/Assets/Palette';
import Submit from 'components/Assets/Icons/Submit';

export default function Form() {
    const templates = [
        BreakPoints.tabletPortrait.name,
        BreakPoints.tabletLandscape.name
    ];

    return (
        <PixelPerfect templates={ templates } component="Form">
            <section className={ Styles.formComponent }>
                <header>
                    <h1>Контакт Центр «Надія»</h1>
                </header>
                <form>
                    <input type="text" className={ Styles.name } placeholder="Ваше имя"/>
                    <input type="email" className={ Styles.email } placeholder="Ваш E-MAIL:"/>
                    <textarea placeholder="Текст сообщения..."></textarea>
                    <button><Submit color={ Palette.paletteColor2 }/>Отправить письмо</button>
                </form>
            </section>
        </PixelPerfect>
    );
}

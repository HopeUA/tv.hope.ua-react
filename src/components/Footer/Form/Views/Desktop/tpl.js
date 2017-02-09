import React from 'react';
import Styles from './Styles/main.scss';
import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

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
                    <textarea placeholder="Текст сообщения..."/>
                    <button><Submit color={ Palette.mainColor4 }/>Отправить письмо</button>
                </form>
            </section>
        </PixelPerfect>
    );
}

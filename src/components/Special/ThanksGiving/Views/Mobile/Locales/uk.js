import React from 'react';
import cx from 'classnames';

import Styles from '../Styles/main.scss';

export default function Uk() {
    const andreyewsCover = cx({
        [Styles.cover]: true,
        [Styles.andreyews]: true
    });

    const philosophStoneCover = cx({
        [Styles.cover]: true,
        [Styles.philosophStone]: true
    });

    return (
        <section className={ Styles.thanksGivingComponent }>
            <h1 className={ Styles.title }>Неймовірно, але це справді можливо!</h1>
            <div className={ Styles.textContainer }>
                <span className={ Styles.initialLetter }>К</span>
                <p className={ Styles.paragraph }>
                    ілька сотень тисяч українців зберуться на Хрещатику в Києві, щоб сказати
                    «Дякую» Богу. Ця подія ввійде в історію як одне із наймасштабніших свят
                    подяки в Україні.
                </p>
            </div>
            <div className={ Styles.banner }/>
            <div className={ Styles.timetable }>
                <div className={ Styles.event }>
                    <span className={ Styles.time }>10:00</span>
                    <h1 className={ Styles.subtitle }>Фотоконкурс</h1>
                    <p className={ Styles.description }>
                        Сфотографуйся в кіношному амплуа на нашій фотозоні
                        і ми розмістимо твою світлину в нашій групі Facebook.
                        Зробивши репост ти зможеш виграти одну з 20 книг від
                        людини-легенди – Ніка Вуйчича. Троє щасливчиків
                        особисто візьмуть у нього автограф і зроблять спільне фото.
                    </p>
                </div>
                <div className={ Styles.event }>
                    <span className={ Styles.time }>13:00</span>
                    <h1 className={ Styles.subtitle }>Зустріч з ведучими програми «2Я – одне життя»</h1>
                    <div className={ Styles.wrap }>
                        <div className={ andreyewsCover }/>
                    </div>
                    <p className={ Styles.description }>
                        Запрошуємо тебе і твою сім&#39;ю взяти участь у розіграші
                        телевізора від щасливої сім&#39;ї ведучих програми «2Я - одне життя»,
                        що на телеканалі «Надiя». Але спочатку Світлана та Кирило Андрєєві
                        проведуть вас через невелике випробування. Не пропусти шанс піти додому
                        з обновкою!
                    </p>
                </div>
                <div className={ Styles.event }>
                    <span className={ Styles.time }>14:00</span>
                    <h1 className={ Styles.subtitle }>Інтелект-шоу з ведучим програми «Філософський камінь»</h1>
                    <div className={ Styles.wrap }>
                        <div className={ philosophStoneCover }/>
                    </div>
                    <p className={ Styles.description }>
                        Якщо ти вважаєш себе розумним та начитаним, тоді бери участь у
                        інтелект-шоу з ведучим програми «Фiлософський камiнь» - Артемом Щербанюком.
                        Кращому знавцеві він вручить путівку в тур по Європі «По следам Реформации».
                    </p>
                </div>
                <div className={ Styles.event }>
                    <span className={ Styles.time }>19:30</span>
                    <h1 className={ Styles.subtitle }>Виступ мотиватора Ніка Вуйчича</h1>
                    <div className={ Styles.wrap }>
                        <div className={ Styles.video }/>
                    </div>
                    <p className={ Styles.description }>
                        Медiа Група «Надiя» приготувала мега-подарунки для тебе і твоєї сім&#39;ї.
                        Ми зробимо все можливе, щоб цей день ти запам&#39;ятав надовго!
                    </p>
                </div>
            </div>
        </section>
    );
}

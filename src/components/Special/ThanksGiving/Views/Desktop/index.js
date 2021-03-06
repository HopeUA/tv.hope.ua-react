import React, { PropTypes } from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

export default function Common() {
    const andreyewsCover = cx({
        [Styles.cover]: true,
        [Styles.andreyews]: true
    });

    const philosophStoneCover = cx({
        [Styles.cover]: true,
        [Styles.philosophStone]: true
    });

    return (
        <section className={ Grid.container }>
            <section className={ Styles.thanksGivingComponent }>
                <h1 className={ Styles.title }>Это невероятно, но как оказалось возможно!</h1>
                <div className={ Styles.textContainer }>
                    <span className={ Styles.initialLetter }>Н</span>
                    <p className={ Styles.paragraph }>
                        есколько сотен тысяч украинцев соберутся на Крещатике в Киеве, чтобы сказать
                        Богу «Спасибо». Это событие войдет в историю, как один из самых масштабных
                        праздников благодарения в Украине.
                    </p>
                </div>
                <div className={ Styles.banner }/>
                <div className={ Styles.timetable }>
                    <div className={ Styles.event }>
                        <span className={ Styles.time }>10:00</span>
                        <h1 className={ Styles.subtitle }>Фотоконкурс</h1>
                        <p className={ Styles.description }>
                            Сфотографируйся в киношном амплуа на нашей фотозоне
                            и мы разместим твое фото в нашей группе в Facеbook.
                            Сделав репост ты сможешь выиграть одну из 20 книг от
                            человека-легенды, Ника Вуйчича. Трое счастливчиков
                            лично возьмут у него автограф и сделают общее фото.
                        </p>
                    </div>
                    <div className={ Styles.event }>
                        <span className={ Styles.time }>13:00</span>
                        <h1 className={ Styles.subtitle }>Встреча ведущими программы «2Я – одне життя»</h1>
                        <div className={ Styles.wrap }>
                            <div className={ andreyewsCover }/>
                        </div>
                        <p className={ Styles.description }>
                            Ждем тебя и твою семью принять участие в розыгрыше
                            телевизора от счастливой семьи ведущих программы «2Я - одне життя»,
                            что на телеканале «Надiя». Но в начале Светлана и Кирилл Андреевы
                            проведут вас через небольшое испытание.  Не пропусти шанс уйти домой с обновкой!
                        </p>
                    </div>
                    <div className={ Styles.event }>
                        <span className={ Styles.time }>14:00</span>
                        <h1 className={ Styles.subtitle }>Интеллект-шоу с ведущим программы «Філософський камінь»</h1>
                        <div className={ Styles.wrap }>
                            <div className={ philosophStoneCover }/>
                        </div>
                        <p className={ Styles.description }>
                            Если ты считаешь себя умным и начитанным, тогда участвуй в
                            интелект-шоу с ведущим программы «Фiлософський камiнь», Артемом Щербанюком.
                            Лучшему знатоку он вручит путевку в тур по Европе «По следам Реформации».
                        </p>
                    </div>
                    <div className={ Styles.event }>
                        <span className={ Styles.time }>19:30</span>
                        <h1 className={ Styles.subtitle }>Выступление мотиватора Ника Вуйчича</h1>
                        <div className={ Styles.wrap }>
                            <div className={ Styles.video }/>
                        </div>
                        <p className={ Styles.description }>
                            Медiа Группа «Надiя» приготовила мега-подарки для тебя и твоей семьи. Мы сделаем все
                            возможное, чтобы этот день ты запомнил надолго!
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

Common.propTypes = {
    mediaType: PropTypes.string.isRequired
};

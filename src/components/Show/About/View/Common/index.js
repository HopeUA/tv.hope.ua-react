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
import Grid from 'theme/Grid.scss';

function Common() {
    return (
        <section className={ Grid.container }>
            <section className={ Styles.aboutComponent }>
                <h1 className={ Styles.title }>О программе</h1>
                <div className={ Styles.content }>
                    <div className={ Styles.image }/>
                    <div className={ Styles.text }>
                        <h2 className={ Styles.showName }>Хліб щоденний</h2>
                        <p className={ Styles.description }>
                            На следующее утро с болью в сердце пророк вышел, чтобы встретить заблуждающегося царя.
                            Самуил лелеял в сердце надежду, что, одумавшись, Саул признает свой грех, раскается,
                            смирится и вновь обретет Божественную благосклонность. Но когда сделан первый шаг по стезе
                            беззакония, остальной путь становится легким. Развращенный своим непослушанием, Саул вышел
                            встречать Самуила с ложью на устах.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

/**
 * [IE]
 * Export
 */
export default Common;

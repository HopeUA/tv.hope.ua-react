import React, { PropTypes } from 'react';

import Grids from 'theme/Grid.scss';
import Styles from './Styles/main.scss';

import BreakPoints from 'helpers/breakpoints';

export default function Desktop(props) {
    const { mediaType, items } = props;

    const options = [
        ['people', 'history'],
        ['bible', 'family'],
        ['health', 'child']
    ];

    const rows = [];
    options.forEach((categoryGroup) => {
        const group = [];
        let title;
        categoryGroup.forEach((categoryItem) => {
            const category = {
                title: '',
                items: []
            };

            category.items = items.filter((item) => {
                return item.category.uid === categoryItem;
            }).map((item) => {
                title = item.category.title.ru;

                return {
                    title: item.title,
                    url: '#',
                    id: item.uid
                };
            });
            category.title = title;

            group.push(category);
        });
        rows.push(group);
    });

    const cols = rows.map((column) => {
        const arrayColumns = column.map((item) => {
            const listItems = item.items.map((el) => {
                return (
                    <li key={ el.id }><a href={ el.url }>{ el.title }</a></li>
                );
            });

            return (
                <div key={ item.title }>
                    <h2>{ item.title }</h2>
                    <ul>{ listItems }</ul>
                </div>
            );
        });

        return arrayColumns;
    });

    const shows = (
        <section className={ Styles.shows }>
            <header>
                <h1>Популярные программы</h1>
                <a href="#">Все программы</a>
            </header>
            <div className={ Styles.col1 }>
                { cols[0] }
            </div>
            <div className={ Styles.col2 }>
                { cols[1] }
            </div>
            <div className={ Styles.col3 }>
                { cols[2] }
            </div>
        </section>
    );

    const about = BreakPoints.tabletPortrait.name !== mediaType ? (
        <section className={ Styles.about } >
            <h1>О телеканале</h1>
            <p><strong>Телеканал</strong> предлагает большое разнообразие программ — для детей и молодежи, о
                семье, здоровье, творческие программы, а также программы духовной тематики — с помощью которых
                Вы сможете углубляться в познание библейских истин, быть участником интересных жизненных историй,
                отправляться с детскими героями в увлекательные путешествия, погружаться в мир музыки, узнавать о
                событиях в мире и Украине в <strong>позитивной перспективе.</strong></p>
            <a href="#">Подробнее...</a>
        </section>
        ) : null
    ;

    return (
        <section className={ Grids.container }>
            <section className={ Styles.showsComponent }>
                { shows }
                { about }
            </section>
        </section>
    );
}

Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array
};
Desktop.defaultProps = {
    items: []
};

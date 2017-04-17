/**
 * [IL]
 * Library Import
 */
import React, { PropTypes } from 'react';

/**
 * [IS]
 * Style Import
 */
import Grids from 'theme/Grid.scss';
import Styles from './Styles/main.scss';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

function Desktop(props) {
    const { mediaType, items, t } = props;

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
                <h1>{ t('Footer.Shows.shows.title') }</h1>
                <a href="#">{ t('Footer.Shows.shows.all') }</a>
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

    const about = (
        <section className={ Styles.about } >
            <h1>{ t('Footer.Shows.about.title') }</h1>
            <p>
                <strong>{ t('Footer.Shows.about.description.1') }</strong>
                { t('Footer.Shows.about.description.2') }
                <strong>{ t('Footer.Shows.about.description.3') }</strong>
            </p>
            <a href="#">{ t('Footer.Shows.about.more') }</a>
        </section>
    );

    return (
        <section className={ Grids.container }>
            <section className={ Styles.showsComponent }>
                { shows }
                { BP.isTabletLandscape(mediaType) || BP.isDesktop(mediaType) ? about : null }
            </section>
        </section>
    );
}

/**
 * [CPT]
 * Component prop types
 */
Desktop.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array,
    t: PropTypes.func.isRequired
};

/**
 * [CDP]
 * Component default props
 */
Desktop.defaultProps = {
    items: []
};

/**
 * [IE]
 * Export
 */
export default Desktop;

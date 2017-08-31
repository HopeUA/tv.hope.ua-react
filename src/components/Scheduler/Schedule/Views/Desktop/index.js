import React, { PropTypes } from 'react';
import cx from 'classnames';
import Moment from 'moment';

import Styles from './Styles/main.scss';
import Grid from 'theme/Grid.scss';

import Flag from 'components/Assets/Icons/Flag';

Moment.locale('ru');

export default function Common(props) {
    const { items } = props;

    const scheduleItems = items.map((e, i) => {
        let isCurrent;

        if (items[i + 1]) {
            isCurrent = Moment().isSameOrAfter(e.date) && Moment().isBefore(items[i + 1].date);
        } else if ((Moment().isSameOrAfter(e.date) && i === items.length - 1)
            && (Moment().format('L') === Moment(e.date).format('L'))) {
            isCurrent = true;
        } else {
            isCurrent = false;
        }

        const itemClasses = cx({
            [Styles.item]: true,
            [Styles.now]: isCurrent,
            [Styles.archive]: !isCurrent
        });

        const background = isCurrent ? {
            backgroundImage: `url(${e.show.images.cover})`
        } : null;

        const inArchive = true;

        const archiveBtnText =  inArchive ? 'в архиве' : 'в архиве чре 7 дней';

        return (
            <div className={ itemClasses } style={ background } key={ e.id }>
                <div className={ Styles.info }>
                    <div className={ Styles.timeBlock }>
                        <span className={ Styles.time }>{ Moment(e.date).format('LT') }</span>
                        <span className={ Styles.label }>сейчас</span>
                    </div>
                    <Flag language={ e.episode.language } className={ Styles.flag }/>
                    <div className={ Styles.titles }>
                        <h3 className={ Styles.title }>{ e.show.title }</h3>
                        <h4 className={ Styles.subtitle }>{ e.show.description.short }</h4>
                    </div>
                </div>
                <div className={ Styles.buttonOnline }>Смотреть онлайн</div>
                <div className={ Styles.buttonArchive }>{ archiveBtnText }</div>
            </div>
        );
    });

    return (
        <section className={ Grid.container }>
            <section className={ Styles.scheduleComponent }>
                { scheduleItems }
            </section>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired
};

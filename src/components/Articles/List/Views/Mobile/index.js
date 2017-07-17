import React, { PropTypes } from 'react';
import Moment from 'moment';

import Styles from './Styles/main.scss';

import Palette from 'components/Assets/Palette';

import Arrow from 'components/Assets/Icons/Arrow';

Moment.locale('ru');

export default function Common(props) {
    const {
        items,
        shown,
        increaseShown,
        numberDownloads,
        totalNumberArticles,
        rollUp
    } = props;

    const articleItems = items.map((element) => {
        const styles = {
            backgroundImage: `url(${element.image})`
        };

        return (
            <div className={ Styles.item } key={ element.code }>
                <div className={ Styles.image } style={ styles }/>
                <div className={ Styles.info }>
                    <p className={ Styles.description }>{ element.description.short }</p>
                    <span className={ Styles.date }>
                        { Moment(element.date).format('DD MMMM, YYYY') }
                    </span>
                </div>
            </div>
        );
    });

    const isAllArticlesShown = numberDownloads === 0;

    const circleStyles = {
        transform: isAllArticlesShown ? 'rotate(-90deg)' : null
    };

    const downloadOrRollUp = isAllArticlesShown ? 'Свернуть' : `Загрузить еще ${numberDownloads}`;

    const showMoreFunc = isAllArticlesShown ? rollUp : increaseShown;

    return (
        <section className={ Styles.listComponent }>
            <div className={ Styles.list }>
                { articleItems }
            </div>
            <div className={ Styles.showMore } onClick={ showMoreFunc }>
                <span className={ Styles.shown }>показано { shown } из { totalNumberArticles }</span>
                <span className={ Styles.download }>{ downloadOrRollUp }</span>
                <div className={ Styles.circle } style={ circleStyles }>
                    <Arrow color={ Palette.tempColor2 } className={ Styles.arrow }/>
                </div>
            </div>
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired,
    shown: PropTypes.number.isRequired,
    increaseShown: PropTypes.func.isRequired,
    numberDownloads: PropTypes.number.isRequired,
    totalNumberArticles: PropTypes.number.isRequired,
    rollUp: PropTypes.func.isRequired
};

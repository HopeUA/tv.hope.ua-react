/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

/**
 * [IV]
 * View Import
 */
import Mobile from './Views/Mobile';
import Desktop from './Views/Desktop';

/**
 * [IBP]
 * Breakpoints
 */
import BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

Moment.locale('ru');

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})

class Days extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    state = {
        index: 50
    };

    findIndex = (index) => () => {
        this.setState({
            index
        });
    };

    /**
     * [CDN]
     * Component display name
     */
    static displayName = config.id;
    /**
     * [CR]
     * Render function
     */
    render = () => {
        /**
         * [RPD]
         * Props destructuring
         */
        const { mediaType } = this.props;

        const days = [];

        for (let i = -13; i !== 14; i++) {
            const day = {
                dayOfWeek: '',
                date: '',
                today: false
            };

            if (i < -1) {
                day.date = Moment()
                    .subtract(Math.abs(i), 'days')
                    .format('DD.MM')
                ;

                day.dayOfWeek = Moment()
                    .subtract(Math.abs(i), 'days')
                    .format('dd')
                ;
            } else if (i > 1) {
                day.date = Moment()
                    .add(i, 'days')
                    .format('DD.MM')
                ;
                day.dayOfWeek = Moment()
                    .add(i, 'days')
                    .format('dd')
                ;
            } else if (i === -1) {
                day.date = 'вчера';
                day.dayOfWeek = Moment()
                    .subtract(Math.abs(i), 'days')
                    .format('dd')
                ;
            } else if (i === 1) {
                day.date = 'завтра';
                day.dayOfWeek = Moment()
                    .add(i, 'days')
                    .format('dd')
                ;
            } else {
                day.date = 'сегодня';
                day.dayOfWeek = Moment().format('dd');
                day.today = true;
            }

            days.push(day);
        }

        const viewProps = {
            indexActive: this.state.index,
            items: days,
            findIndex: this.findIndex
        };

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile { ...viewProps }/>
            );
        } else {
            view = (
                <Desktop { ...viewProps }/>
            );
        }

        /**
         * [RR]
         * Return Component
         */
        return view;
    }
}

/**
 * [IE]
 * Export
 */
export default Days;

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

class ProgramsList extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
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
        const { mediaType, items } = this.props;

        const options = [
            ['people'], ['history'],
            ['bible'], ['family'],
            ['health'], ['child'],
            ['youth'], ['special'],
            ['music'], ['everyday'],
            ['sermons'], ['news'],
            ['movie']
        ];

        const categoryGroups = [];
        options.forEach((categoryGroup) => {
            const group = {
                id: '',
                title: '',
                items: []
            };
            categoryGroup.forEach((categoryItem) => {
                group.items = items.filter((item) => {
                    return item.category.uid === categoryItem;
                }).map((item) => {
                    group.title = item.category.title.ru;
                    group.id = item.category.uid;

                    return {
                        title: item.title,
                        url: '#',
                        id: item.uid,
                        description: item.description.medium,
                        image: item.images.cover
                    };
                });
            });
            categoryGroups.push(group);
        });

        /**
         * [RV]
         * View
         */
        let view;

        if (BP.isMobile(mediaType)) {
            view = (
                <Mobile items={ categoryGroups }/>
            );
        } else {
            view = (
                <Desktop items={ categoryGroups }/>
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
export default ProgramsList;

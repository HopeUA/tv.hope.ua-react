/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

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

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})

class List extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    state = {
        shown: 3
    };

    numberDownloads = () => {
        const diff = this.props.items.length - this.state.shown;

        let numberDownloads;

        if (diff < 3) {
            numberDownloads = diff;
        } else {
            numberDownloads = 3;
        }

        return numberDownloads;
    };

    increaseShown = () => {
        this.setState({
            shown: this.state.shown + this.numberDownloads()
        });
    };

    rollUp = () => {
        this.setState({
            shown: 3
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
        const { mediaType, items } = this.props;

        const articleItems = items.filter((element, index) => {
            return this.state.shown > index;
        });

        const viewProps = {
            items: articleItems,
            shown: this.state.shown,
            increaseShown: this.increaseShown,
            numberDownloads: this.numberDownloads(),
            totalNumberArticles: items.length,
            rollUp: this.rollUp
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
export default List;

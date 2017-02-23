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
import Mobile from './Views/Mobile/tpl';
import DesktopGrid from './Views/DesktopGrid/tpl';
import DesktopRow from './Views/DesktopRow/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';
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
class Episodes extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        view: PropTypes.string.isRequired,
        canRefresh: PropTypes.bool,
        scrollDisable: PropTypes.bool
    };

    /**
     * [CDP]
     * Component default props
     */
    static defaultProps = {
        canRefresh: false,
        scrollDisable: false
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
        const { mediaType, view, canRefresh, scrollDisable } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RV]
         * View
         */
        let component = null;

        if (BP.isMobile(mediaType)) {
            component = <Mobile mediaType={ mediaType }/>;
        } else {
            switch (view) {
                case 'grid':
                    component = (
                        <DesktopGrid
                            mediaType={ mediaType }
                            canRefresh={ canRefresh }
                            scrollDisable={ scrollDisable }
                        />
                    );
                    break;
                case 'row':
                    component = <DesktopRow/>;
                    break;
                default:
                    component = null;
            }
        }

        /**
         * [RPPT]
         * Pixel Perfect templates with state (optional)
         */
        const templates = [
            BP.phonePortrait.name,
            BP.phoneLandscape.name,
            {
                name: BP.tabletPortrait.name,
                states: ['grid', 'row']
            },
            {
                name: BP.tabletLandscape.name,
                states: ['grid', 'row']
            }
        ];

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect
                templates={ templates }
                component={ id }
                state={ view }
            >
                { component }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Episodes;

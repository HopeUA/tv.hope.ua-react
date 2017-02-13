import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Mobile from './Views/Mobile/tpl';
import DesktopGrid from './Views/DesktopGrid/tpl';
import DesktopRow from './Views/DesktopRow/tpl';

import PixelPerfect from 'vendor/PixelPerfect/component';
import BreakPoints from 'helpers/breakpoints';

@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
export default class Episodes extends Component {
    static propTypes = {
        mediaType: PropTypes.string.isRequired,
        view: PropTypes.string.isRequired,
        canRefresh: PropTypes.bool.isRequired,
        scrollDisable: PropTypes.bool.isRequired
    };

    render = () => {
        const { mediaType, view, canRefresh, scrollDisable } = this.props;

        const isMobile = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name
        ].indexOf(mediaType) !== -1;

        const templates = [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            {
                name: BreakPoints.tabletPortrait.name,
                states: ['grid', 'row']
            },
            {
                name: BreakPoints.tabletLandscape.name,
                states: ['grid', 'row']
            }
        ];

        let component = null;

        if (isMobile) {
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

        return (
            <PixelPerfect
                templates={ templates }
                component="Home.Episodes"
                opacity="40"
                state="row"
            >
                { component }
            </PixelPerfect>
        );
    }
}

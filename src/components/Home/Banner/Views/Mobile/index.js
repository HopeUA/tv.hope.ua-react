import React, { Component, PropTypes } from 'react';
import Styles from './Styles/main.scss';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';
import cx from 'classnames';

import Swipeable from 'vendor/Swipeable/index';

export default class Mobile extends Component {

    static propTypes = {
        items: PropTypes.array,
        mediaType: PropTypes.string
    };

    state = {
        index: 0
    };

    toggleSlide = (index) => {
        this.setState({
            index
        });
    };

    render() {
        const { items, mediaType } = this.props;

        const slides = items.map((el) => {
            const imageStyle = {
                backgroundImage: `url(${el.image.mobile})`
            };

            return (
                <a
                    className={ Styles.image }
                    style={ imageStyle }
                    key={ el.id }
                    href={ el.url }
                />
            );
        });

        const dots = items.map((item, i) => {
            const className = cx({
                [Styles.activeItem]: this.state.index === i,
                [Styles.item]: this.state.index !== i
            });

            return (
                <span key={ item.id } className={ className }/>
            );
        });

        return (
            <section className={ Styles.bannerComponent }>
                <Swipeable onChangeIndex={ this.toggleSlide }>
                    { slides }
                </Swipeable>
                {
                    [BreakPoints.phonePortrait.name,
                        BreakPoints.phoneLandscape.name
                    ].indexOf(mediaType) !== -1 ? null : (
                        <div className={ Styles.controlPanel }>
                            { dots }
                        </div>
                    )
                }
            </section>
        );
    }
}

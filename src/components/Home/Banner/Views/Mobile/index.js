import React, { Component, PropTypes } from 'react';
import Styles from './Styles/main.scss';
import BreakPoints from 'vendor/PixelPerfect/breakpoints';
import cx from 'classnames';

import Swipeable from 'vendor/Swipeable/index';

export default class Mobile extends Component {

    propTypes = {
        items: PropTypes.array,
        mediaType: PropTypes.string
    };

    state = {
        index: 0
    };

    handleChangeIndex = (index) => {
        this.setState({
            index
        });
    };

    render() {
        const { items, mediaType } = this.props;

        const bannerItems = items.map((el) => {
            const background = {
                backgroundImage: `url(${el.image.mobile})`
            };

            return (
                <a
                    className={ Styles.image }
                    style={ background }
                    key={ el.id }
                    href={ el.url }
                />
            );
        });

        const controlItems = items.map((item, i) => {
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
                <Swipeable onChangeIndex={ this.handleChangeIndex }>
                    { bannerItems }
                </Swipeable>
                {
                    [BreakPoints.phonePortrait.name,
                        BreakPoints.phoneLandscape.name
                    ].indexOf(mediaType) !== -1 ? null : (
                        <div className={ Styles.controlPanel }>
                            { controlItems }
                        </div>
                    )
                }
            </section>
        );
    }
}

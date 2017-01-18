import React, { Component, PropTypes } from 'react';
import Styles from './Styles/main.scss';
import cx from 'classnames';

import BreakPoints from 'vendor/PixelPerfect/breakpoints';

import Palette from 'components/Assets/Palette';
import Play from 'components/Assets/Icons/PlayPause';
import ArrowBanner from 'components/Assets/Icons/BannerArrow';
import Dot from './Components/Dot';

const TRANSITION_DURATION = 5000;
const ITERATION_DURATION = 10;

export default class Desktop extends Component {
    static propTypes = {
        mediaType: PropTypes.string,
        items: PropTypes.array
    };
    state = {
        index: 0,
        progress: 0
    };
    timer = null;

    componentDidMount = () => {
        this.startTimer();
    };

    startTimer = () => {
        const delta = TRANSITION_DURATION / ITERATION_DURATION;

        this.timer = setInterval(() => {
            const progress = this.state.progress + (100 / delta);
            if (progress > 100) {
                this.toggleNextSlide();
            } else {
                this.setState({ progress });
            }
        }, ITERATION_DURATION);
    };
    stopTimer = () => {
        clearInterval(this.timer);
        this.resetProgress();
    };

    resetProgress = () => {
        this.setState({
            progress: 0
        });
    };
    toggleSlide = (index) => {
        this.setState({ index });
        this.resetProgress();
    };

    togglePrevSlide = () => {
        const index = this.state.index ? this.state.index - 1 : this.props.items.length - 1;
        this.toggleSlide(index);
    };

    toggleNextSlide = () => {
        const index = this.state.index === this.props.items.length - 1 ? 0 : this.state.index + 1;
        this.toggleSlide(index);
    };

    render() {
        const { items, mediaType } = this.props;
        const { index, progress } = this.state;

        const loaderStyle = {
            backgroundColor: items[index].averageColor,
            transform: `translateX(${progress - 100}%)`
        };

        const showCircle = [
            BreakPoints.tabletLandscape.name,
            BreakPoints.desktop.name,
            BreakPoints.desktopWide.name].indexOf(mediaType) !== -1
        ;

        const dots = items.map((item, index) => {
            const className = cx({
                [Styles.item]: true,
                [Styles.active]: this.state.index === index
            });

            return (
                <Dot
                    key={ item.id }
                    className={ className }
                    index={ index }
                    onClick={ this.toggleSlide }
                />
            );
        });

        const slide = items[index];
        const text = slide.text;

        const imageStyle = {
            backgroundImage: `url(${slide.image.desktop})`
        };

        return (
            <section
                className={ Styles.bannerComponent }
                onMouseEnter={ this.stopTimer }
                onMouseLeave={ this.startTimer }
            >
                <div className={ Styles.image } style={ imageStyle }></div>
                <div className={ Styles.wrap }>
                    <div className={ Styles.content }>
                        <div className={ Styles.text }>
                            <span className={ Styles.time }>{ text.time }</span>
                            <span className={ Styles.dayOfWeek }>{ text.day }</span>
                            <h1 className={ Styles.title }>{ text.title }</h1>
                            <h2 className={ Styles.subtitle }>{ text.subtitle }</h2>
                        </div>
                        <div className={ Styles.controls }>
                            <ArrowBanner
                                className={ Styles.arrowLeft }
                                color={ Palette.paletteColor6 }
                                showCircle={ showCircle }
                                onClick={ this.togglePrevSlide }
                            />
                            <Play className={ Styles.play } color={ Palette.paletteColor6 }/>
                            <ArrowBanner
                                className={ Styles.arrowRight }
                                color={ Palette.paletteColor6 }
                                showCircle={ showCircle }
                                onClick={ this.toggleNextSlide }
                            />
                        </div>
                    </div>
                </div>
                <div className={ Styles.dots }>
                    { dots }
                </div>
                <div className={ Styles.loader }>
                    <div className={ Styles.progress } style={ loaderStyle }></div>
                </div>
            </section>
        );
    }
}

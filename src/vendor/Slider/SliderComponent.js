import React, { Component, PropTypes } from 'react';
import Arrow from 'components/Assets/Icons/Arrow';

import Palette from 'components/Assets/Palette';

export default class Slider extends Component {
    static propTypes = {
        children: PropTypes.any,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        disabled: false
    };

    state = {
        indexCurrent: 0,
        containerWidth: 0
    };

    listContainer = null;

    next = () => {
        this.setState({indexCurrent: this.state.indexCurrent + 1});
    };

    prev = () => {
        this.setState({indexCurrent: this.state.indexCurrent - 1});
    };

    refreshLastIndex = () => {
        setTimeout(() => {
            if (!this.listContainer) {
                return;
            }

            const margin = parseInt(window.getComputedStyle(this.listContainer).backgroundSize, 10);
            this.lastIndex = Math.ceil((this.listContainer.scrollWidth - margin) / this.listContainer.offsetWidth);
        }, 0);
    };

    getDeviation = () => {
        const { indexCurrent } = this.state;

        if (indexCurrent === 0) {
            return 0;
        }

        const containerStyles = window.getComputedStyle(this.listContainer);
        const containerMargin = parseInt(containerStyles.backgroundSize, 10); // Margin между items
        const containerWidth = parseInt(this.listContainer.offsetWidth, 10);

        return indexCurrent * (containerWidth + containerMargin);
    };

    componentDidMount() {
        this.refreshLastIndex();
    }

    render(){
        const {
            children
        } = this.props;

        const styles = {
            transform: `translateX(-${this.getDeviation()}px)`
        };

        const overHid = {
            overflow: 'hidden'
        };

        const isArrowLeftVisible  = this.state.indexCurrent !== 0;
        const isArrowRightVisible = this.state.indexCurrent !== (this.lastIndex - 1);

        const arrowLeftStyle = {
            visibility: isArrowLeftVisible ? 'visible' : 'hidden'
        };

        const arrowRightStyle = {
            visibility: isArrowRightVisible ? 'visible' : 'hidden'
        };

        const sliderStyle = {
            justifyContent: 'center'
        };

        return (
            <section className={ this.props.slider } style={ sliderStyle }>
                {
                    !this.props.disabled ?  (
                        <div className={ this.props.arrowLeft } onClick={ this.prev } style={ arrowLeftStyle }>
                            <Arrow
                                color={ Palette.commonColor1 }
                                hoverColor={ Palette.mainColor6 }
                                isStatic={ false }
                                className={ this.props.arrow }
                            />
                        </div>
                    ) : null

                }
                <div style={ overHid } className={ this.props.wrap }>
                    <div ref={ (ref) => this.listContainer = ref } className={this.props.list} style={styles}>
                        { children }
                    </div>
                </div>
                {
                    !this.props.disabled ?  (
                        <div className={ this.props.arrowRight } onClick={ this.next } style={ arrowRightStyle }>
                            <Arrow
                                color={ Palette.commonColor1 }
                                hoverColor={ Palette.mainColor6 }
                                isStatic={ false }
                                className={ this.props.arrow }
                            />
                        </div>
                    ) : null

                }
            </section>
        );
    }
}

// <section className={ this.props.slider }>
//     <Arrow className={ this.props.arrowLeft } onClick={ this.prev } style={ arrowLeftStyle }/>
//     <div style={overHid} className={ this.props.wrap }>
//         <div ref={ (ref) => this.listContainer = ref } className={this.props.list} style={styles}>
//             { children }
//         </div>
//     </div>
//     <Arrow className={ this.props.arrowRight } onClick={ this.next } style={ arrowRightStyle }/>
// </section>
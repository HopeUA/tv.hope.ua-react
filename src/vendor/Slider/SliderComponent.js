/**
 * Created by jenya on 22.09.16.
 */
import React, { Component } from 'react';
 import Styles from './main.scss';

// let App = React.createClass({
//
//     getInitialState: function() {
//
//         return {
//             current: 0
//         };
//     },
//
//     prev: function(){
//         this.setState({
//             current : this.state.current+100
//         });
//     },
//
//     next: function(){
//         this.setState({
//             current : this.state.current-100
//         });
//     },
//
//     render: function(){
//         const current = this.state.current
//         const selection = Content.map(function(el){
//             return <BlockContent
//                 key={el.id}
//                 src={el.image}
//                 text={el.text}
//                 count={current}
//             />;
//         });
//
//         const deviation = `translateX(${this.state.current}%)`;
//
//         let styles = {
//             background: 'red',
//             transform: deviation,
//             transition: 'all 2s'
//         };
//
//         const overHid = {
//             overflow: 'hidden'
//         };
//
//         return (
//             <div className="slider">
//                 <span className="arrowLeft" onClick={ this.next }></span>
//                 <div style={overHid}>
//                     <div className="cover" style={styles}>
//                         { selection }
//                     </div>
//                 </div>
//                 <span className="arrowRight" onClick={ this.prev }></span>
//             </div>
//         );
//     }
// });

export default class Slider extends Component {
    state = {
        current: 0
    };

    next = () => {
        this.setState({current: this.state.current + 100});
    };

    prev = () => {
        this.setState({current: this.state.current - 100});
    };

    render(){
        const deviation = `translateX(${this.state.current}%)`;

        let styles = {
            background: 'red',
            transform: deviation,
            transition: 'all 2s'
        };

        const overHid = {
            overflow: 'hidden'
        };
        
        return (
            <section className={ Styles.slider }>
                <div className={ Styles.arrowLeft } onClick={ this.prev }></div>
                <div style={overHid}>
                    <div className={Styles.list} style={styles}>
                    </div>
                </div>
                <div className={ Styles.arrowRight } onClick={ this.next }></div>
            </section>
        );
    }

}
import React from 'react';
import cx from 'classnames';

import Styles from './Styles/main.scss';

import Flag from 'components/Assets/Icons/Flag';

export default function Common() {
    const itemClasses = cx({
        [Styles.item]: true,
        [Styles.now]: true
    });

    const background = {
        backgroundImage: 'url(https://cdn.hope.ua/media/shows/SMKU/SMKU-cover.jpg)'
    };

    return (
        <section className={ Styles.scheduleComponent }>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="ru" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="uk" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="uk" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="ru" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="uk" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ itemClasses } style={ background }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="ru" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
            <div className={ Styles.item }>
                <div className={ Styles.timeBlock }>
                    <span className={ Styles.time }>00:30</span>
                    <span className={ Styles.label }>сейчас</span>
                </div>
                <Flag language="uk" className={ Styles.flag }/>
                <div className={ Styles.titles }>
                    <h3 className={ Styles.title }>Інша сторона</h3>
                    <h4 className={ Styles.subtitle }>Життя, як боротьба</h4>
                </div>
            </div>
        </section>
    );
}

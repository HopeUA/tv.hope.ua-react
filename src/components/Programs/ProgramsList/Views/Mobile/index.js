import React, { PropTypes } from 'react';

import Styles from './Styles/main.scss';

export default function Common(props) {
    const { items } = props;

    const categoryContainerItems = items.map((item) => {
        return (
            <div className={ Styles.categoryContainer } key={ item[0].id }>
                <h1 className={ Styles.mainTitle }>{ item[0].title }</h1>
                <div className={ Styles.list }>
                    {
                        item[0].items.map((e) => {
                            const imageStyle = {
                                backgroundImage: `url(${e.image})`
                            };

                            return (
                                <div className={ Styles.item } key={ e.id }>
                                    <div className={ Styles.image } style={ imageStyle }/>
                                    <div className={ Styles.info }>
                                        <h3 className={ Styles.title }>{ e.title }</h3>
                                        <p className={ Styles.description }>
                                            { e.description }
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    });

    return (
        <section className={ Styles.programListComponent }>
            { categoryContainerItems }
        </section>
    );
}

Common.propTypes = {
    items: PropTypes.array.isRequired
};

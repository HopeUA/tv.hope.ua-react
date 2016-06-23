import React from 'react';
import Styles from './main.scss';
import { Parallax } from 'modules';

export default function Banner() {
    return (
        <section className={ Styles.bannerComponent }>
            <div className={ Styles.banner }>
                <div className={ Styles.container }>
                    <Parallax src="https://pp.vk.me/c631518/v631518236/343f5/bYXMIu8LoBI.jpg"/>
                    <h1> TEXT </h1>
                </div>
            </div>
        </section>
    );
}

// Banner.propTypes = {
//     text: PropTypes.string
// };

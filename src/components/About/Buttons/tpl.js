/**
 * [IL]
 * Library Import
 */
import React, { Component } from 'react';

/**
 * [IV]
 * View Import
 */
import Common from './View/Common/tpl';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

class Buttons extends Component {
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
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RV]
         * View
         */
        const view = (<Common/>);

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id }>
                { view }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Buttons;

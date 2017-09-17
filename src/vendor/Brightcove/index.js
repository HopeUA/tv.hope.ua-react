import React, { Component, PropTypes } from 'react';
import load from 'load-script';

import Styles from './styles.scss';

export default class Brightcove extends Component {
    static propTypes = {
        accountId: PropTypes.string.isRequired,
        playerId: PropTypes.string.isRequired,
        videoId: PropTypes.string.isRequired
    };

    componentDidMount = () => {
        const script = 'https://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js';
        load(script);
    };

    render() {
        const {
            accountId,
            playerId,
            videoId
        } = this.props;

        return (
            <section className={ Styles.brightcoveComponent } key={ videoId }>
                <video
                    controls
                    autoPlay
                    data-application-id
                    className="video-js"
                    data-account={ accountId }
                    data-embed="default"
                    data-player={ playerId }
                    data-video-id={ videoId }
                />
            </section>
        );
    }
}

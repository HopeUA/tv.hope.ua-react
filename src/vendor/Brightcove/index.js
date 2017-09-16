import React, { Component, PropTypes } from 'react';

import Styles from './styles.scss';

export default class Brightcove extends Component {
    static propTypes = {
        accountId: PropTypes.string.isRequired,
        playerId: PropTypes.string.isRequired,
        videoId: PropTypes.string.isRequired
    };

    render() {
        const {
            accountId,
            playerId,
            videoId
        } = this.props;

        return (
            <section className={ Styles.brightcoveComponent }>
                <div>
                    <video
                        controls
                        data-application-id
                        className="video-js"
                        data-account={ accountId }
                        data-embed="default"
                        data-player={ playerId }
                        data-video-id={ videoId }
                    />
                </div>
            </section>
        );
    }
}

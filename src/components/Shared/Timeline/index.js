import React, { Component, PropTypes } from 'react';
import BreakPoints from 'helpers/breakpoints';
import Desktop from './Views/Desktop';
import Moment from 'moment';
import items from './Mock/data.json';

export default class TimeLine extends Component {
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    state = {
        offset: 0,
        localTime: new Date()
    };

    componentDidMount = () => {
        setInterval(this.updateTime, 1000 * 30);
    };

    updateTime = () => {
        this.setState({
            localTime: new Date()
        });
    };

    render() {
        const { mediaType } = this.props;
        const { localTime, offset } = this.state;

        const serverTime = Moment(localTime).add(offset, 's');

        return [
            BreakPoints.phonePortrait.name,
            BreakPoints.phoneLandscape.name,
            BreakPoints.tabletPortrait.name
        ].indexOf(mediaType) !== -1 ? null : (
            <Desktop mediaType={ mediaType } serverTime={ serverTime.toISOString() } items={ items }/>
        );
    }
}

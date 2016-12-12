import React, { PropTypes } from 'react';
import Navigation from './Views/Common';

export default function Component(props) {
    const { mediaType } = props;

    return <Navigation mediaType={ mediaType }/>;
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};

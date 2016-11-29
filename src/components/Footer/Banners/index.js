import React, { PropTypes } from 'react';
import Banners from './Views/Common';

// TODO получать через api
import items from './Mock/data.json';

export default function Component(props) {
    return <Banners mediaType={ props.mediaType } items={ items }/>;
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};

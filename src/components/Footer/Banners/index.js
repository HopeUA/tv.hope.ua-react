import React, { PropTypes } from 'react';
import Banners from './Views/Common/index';

// TODO получать через api
// import items from './Mock/data.json';

export default function Component(props) {
    return <Banners mediaType={ props.mediaType }/>;
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired,
    items: PropTypes.array
};

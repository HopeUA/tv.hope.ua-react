import React, { PropTypes } from 'react';
import Banners from './Views/Common/tpl';

export default function Component(props) {
    return <Banners mediaType={ props.mediaType }/>;
}

Component.propTypes = {
    mediaType: PropTypes.string.isRequired
};

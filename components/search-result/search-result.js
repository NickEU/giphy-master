import React from 'react';
// import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResult ( props ) {
    const { thumbnail, full } = props.result;
    console.log('inside sResult render: ')
    console.log(full);
    return (
        <img src={thumbnail} onClick={() => props.onThumbnailClick(full)}/>
    );
}

SearchResult.propTypes = {
    result: CustomTypes.SearchResult.isRequired,
};
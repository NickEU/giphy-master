import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

export default function SearchResults (props) {
    console.log('inside search results')
    console.log(props.onThumbnailClick);
    return (
        <div className={styles.container}>
            {props.results.map( (result, id) => <SearchResult onThumbnailClick={props.onThumbnailClick} result={result} key={id} />) }
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
}
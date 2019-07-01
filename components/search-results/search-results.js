import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';
import SearchResult from '../search-result/search-result';
import styles from './search-results.css';

export default function SearchResults ({ results, onThumbnailClick }) {
    console.log('inside search results')
    console.log(onThumbnailClick);
    return (
        <div className={styles.container}>
            {results.map( (result, id) => <SearchResult onClick={() => onThumbnailClick(result)} result={result} key={id} />) }
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
    onThumbnailClick: PropTypes.func.isRequired,
}
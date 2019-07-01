import React from 'react';
import SearchForm from '../../search-form/search-form';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/inifinite-scroll';
import PropTypes from 'prop-types';

export default function Search({ onSearchSubmitted, onInfiniteScroll, isLoading, isActive }) {
    return (
        <div>
            <SearchForm onSearchSubmitted={onSearchSubmitted}/>
            <InfiniteScroll isActive={isActive} isLoading={isLoading} onTrigger={ () => onInfiniteScroll() }>
                <SearchResults />
            </InfiniteScroll>           
        </div>
    );
}


Search.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
}
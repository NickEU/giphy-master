import React from 'react';
import SearchResults from '../../search-results/search-results.container';
import InfiniteScroll from '../../infinite-scroll/inifinite-scroll';
import PropTypes from 'prop-types';

export default class Trending extends React.Component {
    componentDidMount () {
        this.props.onSearchSubmitted();
    }

    render () {
        const { onInfiniteScroll, isLoading, isActive} = this.props;
        return (
            <div>
                <InfiniteScroll isActive={isActive} isLoading={isLoading} onTrigger={ () => onInfiniteScroll() }>
                    <SearchResults />
                </InfiniteScroll>           
            </div>
        );
    }
}


Trending.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
    onInfiniteScroll: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
}
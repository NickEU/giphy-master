import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm ({ onSearchSubmitted }) {
    let searchField = null;
    const searchSubmitted = (e) => {
        e.preventDefault();
        // console.log(e.nativeEvent);
        // console.log(e.target[0].value);
        onSearchSubmitted(searchField.value);
    }
    
    return (
        <form id="searchForm" onSubmit={searchSubmitted}>
            <input ref={(e) => searchField = e} type="text" placeholder="Find me Giphys..."></input>
            <input type="submit" value="search"/>
        </form>            
    );


}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func,
}
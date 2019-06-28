import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-form.css';

export default function SearchForm ({ onSearchSubmitted }) {
    let searchField = null;
    const searchSubmitted = (e) => {
        e.preventDefault();
        // console.log(e.nativeEvent);
        // console.log(e.target[0].value);
        onSearchSubmitted(searchField.value);
    }
    
    return (
        <form className={styles.container} id="searchForm" onSubmit={searchSubmitted}>
            <input className={styles.searchField} ref={(e) => searchField = e} type="text" placeholder="Find me Giphys..."></input>
            <input className={styles.button} type="submit" value="search"/>
        </form>            
    );


}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
}
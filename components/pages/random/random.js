import React from 'react';
import SearchResult from '../../search-result/search-result';
import styles from './random.css';
import * as CustomTypes from '../../../lib/custom-types';
import PropTypes from 'prop-types';

export default class Random extends React.Component {
    componentDidMount () {
        this.props.getRandomGiphy();
    }

    render () {
        let { result, getRandomGiphy, onThumbnailClick } = this.props;
        console.log('props inside random render: ')
        console.log(this.props);
        return (
            <div>
                <button onClick={() => getRandomGiphy()} className={styles.button}>Next Giphy</button>
                <br />
                {result === undefined ? '' : <SearchResult onClick={() => onThumbnailClick(result)} result={result} />}          
            </div>
        );
    }    
}

Random.propTypes = {
    onThumbnailClick: PropTypes.func.isRequired,
    getRandomGiphy: PropTypes.func.isRequired,
    result: CustomTypes.SearchResult,
}
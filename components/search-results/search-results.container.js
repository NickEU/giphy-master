import { connect } from 'react-redux';
import SearchResults from './search-results';

function mapStateToProps (state) {
    console.log('store updated');
    console.log(state);
    return (
        {
            results: state.search.results
        }        
    );
}

export default connect(mapStateToProps)(SearchResults);
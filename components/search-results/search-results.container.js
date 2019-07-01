import { connect } from 'react-redux';
import SearchResults from './search-results';
import { showLightbox } from '../../actions/giphy-display';

function mapStateToProps (state) {
    console.log('store updated');
    console.log(state);
    return (
        {
            results: state.search.results
        }        
    );
}

function mapDispatchToProps (dispatch) {
    return {
        onThumbnailClick: (fullUrl) => {
            dispatch(showLightbox(fullUrl));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
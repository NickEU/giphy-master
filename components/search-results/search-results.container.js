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
        onThumbnailClick: (giphy) => {
            dispatch(showLightbox(giphy));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
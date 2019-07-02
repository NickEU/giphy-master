import { connect } from 'react-redux';
import { performSearch, newSearch } from '../../../actions/search';

function mapDispatchToProps(dispatch) {
    return {
        onInfiniteScroll: () => {
            dispatch(performSearch())
        },
        onSearchSubmitted: (searchTerm) => {
            dispatch(newSearch(searchTerm));
            dispatch(performSearch());
        },
    };
}

function mapStateToProps(state) {
    let { isLoading, isActive } = state.search;
    //console.log("state = " + JSON.stringify(state));
    //console.log('isLoading = ' + isLoading);
    return {
        isLoading: isLoading,
        isActive: isActive,
    };
}

export default connect(mapStateToProps, mapDispatchToProps);
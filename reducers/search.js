import { SEARCH_SUCCESS, NEW_SEARCH, PERFORM_SEARCH, SEARCH_ERROR } from '../actions/search';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
    results: [],
    currentOffset: 0,
    searchTerm: null,
    isLoading: false,
    isActive: false,
};

function searchResultTransformer (rawResult) {
    const { images } = rawResult;
    return {
        thumbnail: images.fixed_height_small_still.url,
        full: images.original.url,
    };
}

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    console.log('action inside SRC reducer:');
    console.log(action);
    console.log('state inside SRC reducer:');
    console.log(state);
    switch (action.type) {
        case NEW_SEARCH:
            return {
                ...state,
                currentOffset: 0,
                searchTerm: action.searchTerm,
                results: [],
                isActive: false,
            };
        case PERFORM_SEARCH:
            return {
                ...state,
                isLoading: true,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                currentOffset: state.currentOffset + 50,
                results: state.results.concat(action.results.map(searchResultTransformer)),
                isLoading: false,
                isActive: action.results.length === 50 ? true : false,
            };
        case SEARCH_ERROR:
            return {
                ...state,
                isLoading: false,
                isActive: false,
            };
        case LOCATION_CHANGE:
            return initialState;
        default:
            return state;
    }
}
import { GET_RANDOM, GET_RANDOM_SUCCESS } from '../actions/random';
import { LOCATION_CHANGE } from 'react-router-redux';


const initialState = {
    result: undefined,
};

function searchResultTransformer (rawResult) {
    const { images } = rawResult;
    return {
        thumbnail: images.fixed_width_downsampled.url,
        full: images.original.url,
    };
}

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    }
    console.log('action inside RND reducer:');
    console.log(action);
    console.log('state inside RND reducer:');
    console.log(state);
    switch (action.type) {
        case GET_RANDOM:
            return {
                ...state,
            }
        case GET_RANDOM_SUCCESS:
            return {
                ...state,
                result: searchResultTransformer(action.result),
            };
        case LOCATION_CHANGE:
            return initialState;
        default:
            return state;
    }
}
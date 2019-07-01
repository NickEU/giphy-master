import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { NEW_SEARCH, PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search'

const apiKey = 'rFHZ8UZoSGWl3yVdjYl9T1veY5R6Uw6o';

const selectSearchState = (state) => state.search;

function* doSearch() {
    const { currentOffset, searchTerm } = yield select(selectSearchState);
    //console.log('searchterm = ' + JSON.stringify(searchTerm));
    console.log('searchterm = ' + searchTerm);
    try {
        const searchResults = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/search',
            {
                params: {
                    apiKey,
                    q: searchTerm,
                    limit: 50,
                    offset: currentOffset,
                }
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
    
}

export default function* () {
    yield takeLatest(NEW_SEARCH, doSearch);
    yield takeLatest(PERFORM_SEARCH, doSearch);
}
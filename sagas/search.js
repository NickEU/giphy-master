import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { PERFORM_SEARCH, searchSuccess, searchError } from '../actions/search'

const apiKey = 'rFHZ8UZoSGWl3yVdjYl9T1veY5R6Uw6o';

const selectSearchState = (state) => state.search;

function* doSearch() {
    const { currentOffset, searchTerm } = yield select(selectSearchState);
    console.log('searchterm = ' + searchTerm);
    try {
        let apiCallUrl = 'https://api.giphy.com/v1/gifs/';
        let params = {
            apiKey,
            limit: 50,
            offset: currentOffset,
        };
        if (searchTerm === undefined) {
            apiCallUrl += 'trending';
        } else {
            apiCallUrl += 'search';
            params.q = searchTerm;
        }
        const searchResults = yield call(
            axios.get,
            apiCallUrl,
            {
                params,
            }
        );
        yield put(searchSuccess(searchResults.data.data));
    } catch (e) {
        yield put(searchError());
    }
    
}

export default function* () {
    yield takeLatest(PERFORM_SEARCH, doSearch);
}
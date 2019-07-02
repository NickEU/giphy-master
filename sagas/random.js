import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_RANDOM, getRandomSuccess, getRandomError } from '../actions/random'

const apiKey = 'rFHZ8UZoSGWl3yVdjYl9T1veY5R6Uw6o';

function* doSearch() {
    try {
        const randomResult = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/random',
            {
                params: { apiKey }
            }
        );
        console.log('rnd result in saga response: ');
        console.log(randomResult);
        yield put(getRandomSuccess(randomResult.data.data));
    } catch (e) {
        yield put(getRandomError());
    }
    
}

export default function* () {
    yield takeLatest(GET_RANDOM, doSearch);
}
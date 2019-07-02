export const GET_RANDOM = 'GET_RANDOM';
export const SEARCH_ERROR = 'SEARCH_ERROR';
export const GET_RANDOM_SUCCESS = 'GET_RANDOM_SUCCESS';

export const getRandom = () => ({
    type: GET_RANDOM,
});

export const getRandomSuccess = (result) => ({
    type: GET_RANDOM_SUCCESS,
    result,
})

export const searchError = () => ({ type: SEARCH_ERROR });
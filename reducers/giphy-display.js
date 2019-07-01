import { SHOW_LIGHTBOX, HIDE_LIGHTBOX } from '../actions/giphy-display';

const initialState = {
    giphy: null,
    
}

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    } 

    switch (action.type) {
        case SHOW_LIGHTBOX:
            console.log('show = ');
            console.log(action.giphy);
            console.log(state);
            return {
                ...state,
                isShown: true,
                giphy: action.giphy,
            };
        case HIDE_LIGHTBOX:
            return {
                ...state,
                isShown: false,                
            };
        default:
            return state;
    }

}
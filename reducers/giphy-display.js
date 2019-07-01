import { SHOW_LIGHTBOX, HIDE_LIGHTBOX } from '../actions/giphy-display';

const initialState = {
    giphy: null,
    isShown: false,    
}

export default (state, action) => {
    if (state === undefined) {
        return initialState;
    } 

    console.log('state inside GD reducer:');
    console.log(state);

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
                giphy: null,                
            };
        default:
            return state;
    }

}
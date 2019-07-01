import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';
import { hideLightbox } from '../../actions/giphy-display';

function mapDispatchToProps (dispatch) {
    return {
        onLightboxClick: () => {
            dispatch(hideLightbox());
        }
    }
}

function mapStateToProps (state) {
    const { isShown } = state.giphyDisplay;
    return {
        ...state,
        isShown: isShown,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



//export default ;
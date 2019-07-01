import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './app';
import { hideLightbox } from '../../actions/giphy-display';

const mapDispatchToProps = (dispatch) => {
    return {
        onLightboxClick: () => {
            dispatch(hideLightbox());
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        isShown: state.giphyDisplay.isShown,
        giphy: state.giphyDisplay.giphy,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));



//export default ;
import { connect } from 'react-redux';
import { getRandom } from '../../../actions/random';
import { showLightbox } from '../../../actions/giphy-display';
import Random from './random';

function mapDispatchToProps(dispatch) {
    return {
        getRandomGiphy: () => {
            dispatch(getRandom());
        },
        onThumbnailClick: (giphy) => {
            dispatch(showLightbox(giphy));
        }
    };
}

function mapStateToProps(state) {
    let { result } = state.random;
    return {
        result,
    };
}

//connect()(Random);
export default connect(mapStateToProps, mapDispatchToProps)(Random);
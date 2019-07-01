import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

export default class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.scrollListener = this.scrollListener.bind(this);
    }

    componentDidMount () {
        document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount () {
        document.removeEventListener('scroll', this.scrollListener);
    }

    scrollListener () {
        const { isLoading, onTrigger, isActive } = this.props;
        const viewportHeight = document.documentElement.clientHeight;
        const { bottom } = this.container.getBoundingClientRect();
        if (isActive && !isLoading && (bottom <= viewportHeight * 1.1)) {
            //trigger the inf scroll
            onTrigger();
        } 
    }

    render () {
        const { children , isLoading, isActive } = this.props;
        return (
            <div ref={(e) => this.container = e}>
                {children}
                { isActive && isLoading && <Spinner /> }
            </div>
        );
    }

}

InfiniteScroll.propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};
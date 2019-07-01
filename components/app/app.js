import React from 'react';
import Navigation from '../navigation/navigation.container';
import styles from './app.css';
import GiphyDisplay from '../giphy-display/giphy-display';

export default function (props) {
    let { children, isShown, onLightboxClick, giphyDisplay } = props;
    console.log('inside app render:');
    console.log(props);
    return (
        <div>
            <h1 className={styles.header}>Giphy Master</h1>
            <Navigation />
            {children}
            <GiphyDisplay isShown={isShown} onClick={() => onLightboxClick()} giphy={{ full: giphyDisplay.giphy}}/>
        </div>    
    );
} 
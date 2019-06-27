import React from 'react';
import SearchForm from './search-form/search-form';
import SearchResults from './search-results/search-results';

const results = [
    {
        full: 'https://media0.giphy.com/media/3oKIPjzfv0sI2p7fDW/giphy.gif?cid=0f8a5ee65d146cf14a566e5167492819&rid=giphy.gif',
        thumbnail: 'https://media0.giphy.com/media/3oKIPjzfv0sI2p7fDW/100_s.gif?cid=0f8a5ee65d146cf14a566e5167492819&rid=100_s.gif',
    },
    {
        full: 'https://media3.giphy.com/media/ghHDuqJ1uh9vP2gKdC/giphy.gif?cid=0f8a5ee65d146cf14a566e5167492819&rid=giphy.gif',
        thumbnail: 'https://media3.giphy.com/media/ghHDuqJ1uh9vP2gKdC/100_s.gif?cid=0f8a5ee65d146cf14a566e5167492819&rid=100_s.gif',
    }
];

export default () => (
    <div>
        <SearchForm onSearchSubmitted={ (term) => console.log(term) } />
        <SearchResults result={ results } />
    </div>
    
);
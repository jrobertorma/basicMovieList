import React from 'react';
import ReactDOM from 'react-dom';

import MovieList from './containers/MovieList';

const App = () => {
    return (
        <div>
            <h1>movieList yoyoyo root component</h1>
            <MovieList />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
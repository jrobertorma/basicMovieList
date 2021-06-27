import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './containers/MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=Batman&apikey=25b028b4`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

    return (
        <div>
            <h1>movieList yoyoyo root component</h1>
            <p>{console.log(movies[0])}</p>
            <MovieList movies={movies} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
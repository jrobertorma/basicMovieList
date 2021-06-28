import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './containers/MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = searchValue 
			? `http://www.omdbapi.com/?s=${searchValue}&apikey=25b028b4`
			: `http://www.omdbapi.com/?s=&apikey=25b028b4`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const handleSearchSubmit = (event) => {
		getMovieRequest(searchTerm);
		event.preventDefault();
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

    return (
        <div>
            <h1>movieList</h1>
			
			<form onSubmit={ (event) => handleSearchSubmit(event) }>
				<input 
					type="text" 
					name="searchTerm" 
					value={searchTerm}
					onChange={ (event) => setSearchTerm(event.target.value) }
				/>
				<button type="submit">
					Search
				</button>
			</form>

            <MovieList movies={movies} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
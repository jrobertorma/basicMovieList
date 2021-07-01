import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './containers/MovieList';

const App = () => {
    const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	let [pageNumber, setPageNumber] = useState(1);

	const getMovieRequest = async (searchTerm,pageNumber) => {
		const url = searchTerm 
			? `http://www.omdbapi.com/?s=${searchTerm}&apikey=25b028b4&page=${pageNumber}`
			: `http://www.omdbapi.com/?s=&apikey=25b028b4`;

		// console.log(url);

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		} else {
			setPageNumber(pageNumber - 1);
		}
	};

	const handleSearchSubmit = (event) => {
		getMovieRequest(searchTerm, pageNumber);
		event.preventDefault();
	};

	const previousPage = () => {
		if (pageNumber > 1) { 
			setPageNumber(pageNumber - 1);
			getMovieRequest(searchTerm, pageNumber-1);
		} else { 
			getMovieRequest(searchTerm, pageNumber);
		};
		
	}

	const nextPage = () => {
		setPageNumber(pageNumber + 1);
		getMovieRequest(searchTerm, pageNumber+1);
	}

	// useEffect(() => {
	// 	getMovieRequest(searchTerm);
	// }, [searchTerm]);

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
			
			<div>
				<p>Page:{pageNumber}</p>
				<button onClick={() => previousPage()}>
					Previous page
				</button>
				<button onClick={() => nextPage()}>
					Next Page
				</button>
			</div>
			
            <MovieList movies={movies} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
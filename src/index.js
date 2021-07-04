import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MovieList from './containers/MovieList';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        <ThemeProvider theme={theme}> 
			<CssBaseline />

			<Container>
				<Box my={4}>
					<Typography variant="h4" component="h1" gutterBottom>
						movieList
					</Typography>

					<form onSubmit={ (event) => handleSearchSubmit(event) }>
						<TextField 
							id="searchTerm" 
							
							name="searchTerm" 
							value={searchTerm}
							onChange={ (event) => setSearchTerm(event.target.value) }
						/>

						
							<Button type="submit" variant="contained" color="primary">
								Search
							</Button>
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
				</Box>
    		</Container>
		</ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
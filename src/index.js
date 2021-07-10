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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
			getMovieRequest(searchTerm, pageNumber-1);
			setPageNumber(pageNumber-1);
		} else { 
			getMovieRequest(searchTerm, pageNumber);
		};
		
	}

	const nextPage = () => {
		getMovieRequest(searchTerm, pageNumber+1);
		setPageNumber(pageNumber+1);
	}

	// useEffect(() => {
	// 	getMovieRequest(searchTerm);
	// }, [searchTerm]);

    return (
        <ThemeProvider theme={theme}> 
			<CssBaseline />

			<Container>
				<Box my={4}>
					<Typography variant="h4" component="h1" align="justify" gutterBottom>
						movieList
					</Typography>

					<form onSubmit={ (event) => handleSearchSubmit(event) }>
						<Grid container spacing={1} alignItems="center" justify="center">
							<Grid item xs> 
								<TextField 
									id="searchTerm" 
									name="searchTerm" 
									value={searchTerm}
									onChange={ (event) => setSearchTerm(event.target.value) }
								/>
							</Grid>
							
							<Grid item xs> 
								<Button type="submit" variant="contained" color="primary">
									Search
								</Button>
							</Grid>
						</Grid>
						
					</form>

					<Grid container spacing={1} alignItems="center" justify="center">
						<Grid item xs={12} >
							<p>Page:{pageNumber}</p>
						</Grid>
						<Grid item xs={6} sm={2}>
							<Button 
								variant="contained" 
								color="primary" 
								onClick={() => previousPage()}
							>
								Previous page
							</Button>
						</Grid>
						<Grid item xs={6} sm={2}> 
							<Button 
								variant="contained" 
								color="primary" 
								onClick={() => nextPage()}
							>
								Next page
							</Button>
						</Grid>
					</Grid>

					<MovieList movies={movies} />
				</Box>
    		</Container>
		</ThemeProvider>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
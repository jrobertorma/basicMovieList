import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import MovieDetail from './containers/MovieDetail';
import MovieListHeader from './containers/MovieListHeader';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
			<Container>
				<Box my={4}>
					<CssBaseline />

					<BrowserRouter>
						
						<Typography variant="h4" component="h1" align="justify" gutterBottom>
							movieList
						</Typography>

						<Switch>
							<Route exact path="/">
								<MovieListHeader />
							</Route>
							<Route path="/:id">
								<MovieDetail />
							</Route>
						</Switch>

					</BrowserRouter>
				</Box>
    		</Container>
		</ThemeProvider>

		
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
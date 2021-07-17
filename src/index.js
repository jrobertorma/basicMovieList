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
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
  }));
  
const ButtonAppBar = () => {
	const classes = useStyles();
  
	return (
	  <div className={classes.root}>
		<AppBar position="static">
		  <Toolbar>
			<Typography variant="h6" className={classes.title}>
			  Movie List
			</Typography>
		  </Toolbar>
		</AppBar>
	  </div>
	);
  }

const App = () => {
    return (
        <ThemeProvider theme={theme}>
			<ButtonAppBar />
			<Container>
				<Box my={4}>
					<CssBaseline />

					<BrowserRouter>
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
import React from "react";

import Grid from '@material-ui/core/Grid';

import MovieCard from "../../components/MovieCard";
import MovieDetail from "../MovieDetail";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const MovieList = (props) => {
    return (
        <Router>
            <Grid container spacing={3}>
                {/* <p>{movies[0].Title}</p> */}
                {
                    props.movies.map ( movie => (
                            <Grid item xs={12} sm={6} md={3} key={movie.imdbID}>
                                <MovieCard movie={movie}/>
                            </Grid>
                        )
                    )
                }
            </Grid>
            <Switch>
                <Route path="/:id" children={<MovieDetail />} />
            </Switch>
        </Router>
    );
}
 
export default MovieList;

/**
 * We get an array of objects and render it using a map.
 * 
 * Notice that a map() in JSX can't contain curly braces '{}' in the callback function definition. 
 * I initially thought that as the JS docs allow it (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 
 * React would do te same, but no lol (https://reactjs.org/docs/lists-and-keys.html).
 * 
 * So be careful, and use parenthesis () when the callback function requires more than one line.
 * 
 * movies.map ( movie => { <MovieCard movie={movie}/> } ); // won't work
 * 
 * movies.map ( movie => ( <MovieCard movie={movie}/> ) ); // will work
 */
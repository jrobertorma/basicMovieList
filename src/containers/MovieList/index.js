import React from "react";
import MovieCard from "../../components/MovieCard";

const MovieList = (props) => {
    return ( 
        <div>
            <p>YOYOYO, SOY MOVIELIST Y LLAMO A :</p>
            {/* <p>{movies[0].Title}</p> */}
            {
                props.movies.map ( movie => (
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    )
                )
            }
        </div> 
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
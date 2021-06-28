import React from 'react';

const MovieCard = ({movie}) => {
    return ( 
        <div>  
            <p>Title: {movie.Title}</p>
            <p>Year: {movie.Year}</p>
            <p>imdbID: {movie.imdbID}</p>
            <p>Type: {movie.Type}</p>
            <p>Poster: {movie.Poster}</p>
        </div>
    );
}
 
export default MovieCard;
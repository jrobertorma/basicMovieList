import React, { Component } from "react";
import MovieCard from "../../components/Card";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies: this.props.movies
        }
    }
    render() { 
        const {movies} = this.state;

        return (   
            <div>
                <p>YOYOYO, SOY MOVIELIST Y LLAMO A :</p>
                {
                    movies.map(
                        (movie) => {
                            <MovieCard movie={movie}/>
                        }
                    )
                }
            </div> 
        );
    }
}
 
export default MovieList;
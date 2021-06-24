import React, { Component } from "react";
import MovieCard from "../components/MovieCard";

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
        <div>
            <p>YOYOYO, SOY MOVIELIST Y LLAMO A :</p> 
            <MovieCard />
        </div> );
    }
}
 
export default MovieList;
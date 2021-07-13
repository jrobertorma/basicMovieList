import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Soy movie detail</p>
        </div>
    );
}

export default MovieDetail;
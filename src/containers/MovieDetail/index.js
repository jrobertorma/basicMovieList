import React from "react";
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const MovieDetail = () => {
    let { id } = useParams();

    return (
        <div>
            <Button size="small" color="primary" component={RouterLink} to={"/"}>
                Back
            </Button>
            <h3>ID: {id}</h3>
            <p>Soy movie detail</p>
        </div>
    );
}

export default MovieDetail;

/**
 * https://material-ui.com/components/modal/#transitions
 */
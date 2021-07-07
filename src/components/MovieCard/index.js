import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 510,
    },
  });

const MovieCard = ({movie}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={movie.Poster}
            title={movie.Title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {movie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Year: {movie.Year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                imdbID: {movie.imdbID}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Type: {movie.Type}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
        </Card>
    );
}

// const MovieCard = ({movie}) => {
//     return ( 
//         <div>  
//             <p>Title: {movie.Title}</p>
//             <p>Year: {movie.Year}</p>
//             <p>imdbID: {movie.imdbID}</p>
//             <p>Type: {movie.Type}</p>
//             <p>Poster: {movie.Poster}</p>
//         </div>
//     );
// }
 
export default MovieCard;

/**
 * https://material-ui.com/components/cards/#media
 */
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
      maxWidth: 555,
    },
    media: {
      height: 428,
    },
  });

const MovieCard = ({movie}) => {
    const classes = useStyles();
    const moviePoster = movie.Poster == 'N/A' ? 'https://billiardport.com/img/flyers/no_poster_available.jpg' : movie.Poster;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={moviePoster}
                title={movie.Title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Year: {movie.Year} imdbID: {movie.imdbID} Type: {movie.Type}
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

export default MovieCard;

/**
 * https://material-ui.com/components/cards/#media
 */
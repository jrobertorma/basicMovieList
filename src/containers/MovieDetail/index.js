import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 510,
    },
    media: {
        height: 418,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      /*border: '2px solid #000',*/
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 2, 2),
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'center',
    }
  }));

const MovieDetail = ({open, handleClose, movie}) => {
    const classes = useStyles();
    const moviePoster = movie.Poster == 'N/A' ? 'https://billiardport.com/img/flyers/no_poster_available.jpg' : movie.Poster;

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                            {moviePoster ? (
                                <CardMedia
                                className={classes.media}
                                image={moviePoster}
                                title={movie.Title}
                                />
                            ) : (
                                <CircularProgress />
                            )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.Title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Year: {movie.Year} imdbID: {movie.imdbID} Type: {movie.Type}
                                        Genre: {movie.Genre} Director: {movie.Director} Writer: {movie.Writer}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            </Grid>
                        </CardActionArea>
                        <CardActions className={classes.cardActions}>
                            <Button  size="small" color="primary" onClick={handleClose}>
                                Close
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default MovieDetail;

/**
 * https://material-ui.com/components/modal/#transitions
 */
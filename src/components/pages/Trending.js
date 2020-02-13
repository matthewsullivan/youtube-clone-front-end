import React from 'react';

import {Link} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ReceiptIcon from '@material-ui/icons/Receipt';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import TheatersIcon from '@material-ui/icons/Theaters';

import {makeStyles} from '@material-ui/core/styles';

import VideoThumbnail from '../elements/VideoThumbnail';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(2),
  },

  avatar: {
    backgroundColor: '#3e3e3e',
    height: 80,
    width: 80,
  },

  title: {
    color: '#fff',
  },

  topic: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 2.5,
    textDecoration: 'none',
  },

  topics: {
    borderBottom: '1px solid #3e3e3e',
    marginBottom: 24,
    textAlign: 'center',
  },
}));

export default function Trending() {
  const classes = useStyles();

  /**
   * Get Trending
   * @return {JSX}
   */
  const getTrending = () => {
    const videos = [1, 2, 3, 4];

    return (
      <>
        {videos.map((name, index) => {
          return (
            <Grid item key={index} xs={12}>
              <VideoThumbnail horizontal />
            </Grid>
          );
        })}
      </>
    );
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid className={classes.topics} container spacing={3}>
        <Grid item>
          <Link className={classes.topic} to={'/'}>
            <Avatar className={classes.avatar}>
              <MusicNoteIcon fontSize="large" />
            </Avatar>
            Music
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.topic} to={'/'}>
            <Avatar className={classes.avatar}>
              <VideogameAssetIcon fontSize="large" />
            </Avatar>
            Gaming
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.topic} to={'/'}>
            <Avatar className={classes.avatar}>
              <ReceiptIcon fontSize="large" />
            </Avatar>
            News
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.topic} to={'/'}>
            <Avatar className={classes.avatar}>
              <TheatersIcon fontSize="large" />
            </Avatar>
            Movies
          </Link>
        </Grid>
        <Grid item>
          <Link className={classes.topic} to={'/'}>
            <Avatar className={classes.avatar}>
              <LoyaltyIcon fontSize="large" />
            </Avatar>
            Fashion
          </Link>
        </Grid>
      </Grid>

      <Grid container>{getTrending()}</Grid>
    </Container>
  );
}

import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';

import VideoThumbnail from '../elements/VideoThumbnail';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3.5),
    paddingTop: theme.spacing(4),
  },

  title: {
    color: '#fff',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            color="inherit"
            component="h1"
            noWrap
            variant="h6"
          >
            Recommended
          </Typography>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <VideoThumbnail />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <VideoThumbnail />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <VideoThumbnail />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <VideoThumbnail />
        </Grid>
      </Grid>
    </Container>
  );
}

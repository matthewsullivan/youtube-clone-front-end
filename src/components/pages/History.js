import React from 'react';

import {Link} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import {makeStyles} from '@material-ui/core/styles';

import SignInButton from '../elements/SignInButton';

const useStyles = makeStyles((theme) => ({
  body: {
    color: '#fff',
  },

  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3.5),
    paddingTop: theme.spacing(4),
  },

  grid: {
    height: 264,
    marginTop: 120,
  },

  icon: {
    color: '#909090',
    height: 96,
    width: 96,
  },

  link: {
    color: '#3ea6ff',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.2,
    textDecoration: 'none',
  },

  title: {
    color: '#fff',
  },
}));

export default function History() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid
        alignItems="center"
        className={classes.grid}
        container
        direction="column"
        justify="space-around"
      >
        <Grid item>
          <VideoLibraryIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            color="inherit"
            component="h1"
            noWrap
            variant="h5"
          >
            Keep track of what you watch
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.body}
            color="inherit"
            component="p"
            noWrap
          >
            Watch history isn't viewable when signed out.{' '}
            <a
              className={classes.link}
              href={'https://support.google.com/youtube/answer/95725?hl=en'}
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn more
            </a>
          </Typography>
        </Grid>
        <Grid item>
          <SignInButton />
        </Grid>
      </Grid>
    </Container>
  );
}

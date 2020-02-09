import React from 'react';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {makeStyles} from '@material-ui/core/styles';

import clsx from 'clsx';

import VideoThumbnail from '../elements/VideoThumbnail';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3.5),
    paddingTop: theme.spacing(4),
  },

  collapse: {
    borderBottom: '4px solid #383838',
  },

  expand: {
    color: '#909090',
    height: 48,
    width: '100%',
    '&:hover': {
      backgroundColor: '#383838',
      color: '#fff',
    },
  },

  expandIcon: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  title: {
    color: '#fff',
  },

  trending: {
    borderTop: '4px solid #383838',
  },
}));

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /**
   * Get Recommended
   * @return {JSX}
   */
  const getRecommended = () => {
    const videos = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <>
        {videos.map((name, index) => {
          return (
            <Grid item key={index} md={3} sm={6} xs={12}>
              <VideoThumbnail />
            </Grid>
          );
        })}
      </>
    );
  };

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
            <Grid item key={index} md={3} sm={6} xs={12}>
              <VideoThumbnail />
            </Grid>
          );
        })}
      </>
    );
  };

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

        {getRecommended()}

        <Grid className={classes.trending} item xs={12}>
          <Typography
            className={classes.title}
            color="inherit"
            component="h1"
            noWrap
            variant="h6"
          >
            Trending
          </Typography>
        </Grid>

        {getTrending()}

        <Grid className={classes.collapse} item xs={12}>
          <Button
            aria-expanded={expanded}
            aria-label="show more"
            className={classes.expand}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon
              className={clsx(classes.expandIcon, {
                [classes.expandOpen]: expanded,
              })}
            />
          </Button>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Grid container spacing={3}>
              {getTrending()}
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  );
}

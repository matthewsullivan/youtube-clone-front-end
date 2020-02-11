import React from 'react';

import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {makeStyles} from '@material-ui/core/styles';

import VideoThumbnail from '../elements/VideoThumbnail';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3.5),
    paddingTop: theme.spacing(4),
  },

  collapse: {
    borderBottom: '4px solid #383838',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    marginBottom: 32,
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

        <Collapse
          className={classes.collapse}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <Grid container spacing={3}>
            {getTrending()}
          </Grid>
        </Collapse>

        <Grid
          className={classes.collapse}
          hidden={expanded}
          item
          style={{padding: 0}}
          xs={12}
        >
          <Button
            aria-expanded={expanded}
            aria-label="show more"
            className={classes.expand}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </Button>
        </Grid>

        {getRecommended()}
      </Grid>
    </Container>
  );
}

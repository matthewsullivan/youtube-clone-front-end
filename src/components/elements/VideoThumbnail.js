import React from 'react';

import {Link} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import {makeStyles} from '@material-ui/core/styles';
import {CardContent} from '@material-ui/core';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#fff',
    cursor: 'pointer',
  },

  channel: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.2,
    textDecoration: 'none',
    '&:hover': {
      color: '#fff',
    },
  },

  description: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 1.4,
  },

  header: {
    alignItems: 'start',
    paddingLeft: 0,
    paddingRight: 0,
  },

  hidden: {
    display: 'none',
  },

  horizontal: {
    marginBottom: 24,
  },

  media: {
    height: 160,
  },

  mediaHorizontal: {
    height: 160,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
      width: 248,
    },
  },

  options: {
    color: '#aaa',
    paddingTop: 6,
    '&:hover': {
      color: '#fff',
    },
  },

  statistics: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: 500,
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1,
  },

  titleHorizontal: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'uppercase',
  },
}));

VideoThumbail.propTypes = {
  horizontal: PropTypes.any,
};

export default function VideoThumbail(props) {
  const classes = useStyles();

  const {horizontal} = props;

  if (horizontal) {
    return (
      <Card className={classes.root}>
        <Grid
          alignItems="flex-start"
          className={classes.horizontal}
          container
          direction="row"
          spacing={2}
        >
          <Grid item>
            <CardMedia
              className={classes.mediaHorizontal}
              component="img"
              image="https://picsum.photos/400"
              title="Video Thumbnail"
            />
          </Grid>
          <Grid container item sm>
            <Grid container direction="column" item spacing={2} xs>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.titleHorizontal}
                      variant="h6"
                    >
                      Video title goes here
                    </Typography>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <Link className={classes.channel} to={'/'}>
                        Channel Name
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.statistics}
                        gutterBottom
                        variant="subtitle2"
                      >
                        • 1.1m views • 2 weeks
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Typography className={classes.description} variant="subtitle2">
                  Hello friends and welcome back to our channel! A few months
                  ago, I found out that Amazon started offering a personal
                  shopping service. Thats right, Amazon was styling people for a
                  small fee...
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="settings"
                className={classes.options}
                disableRipple
              >
                <MoreVertIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image="https://picsum.photos/400"
        title="Video Thumbnail"
      />
      <CardHeader
        avatar={
          <Avatar aria-label="channel icon" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            className={classes.options}
            disableRipple
          >
            <MoreVertIcon />
          </IconButton>
        }
        className={classes.header}
        subheader={
          <>
            <Link className={classes.channel} to={'/'}>
              Channel Name
            </Link>

            <Typography className={classes.statistics} variant="subtitle2">
              1.1m views • 2 weeks
            </Typography>
          </>
        }
        title={
          <Typography className={classes.title} gutterBottom variant="h6">
            Video title goes here
          </Typography>
        }
      />
    </Card>
  );
}

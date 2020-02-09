import React from 'react';

import {Link} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
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

  header: {
    alignItems: 'start',
    paddingLeft: 0,
    paddingRight: 0,
  },

  media: {
    height: 160,
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
    lineHeight: 1.2,
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1,
  },
});

export default function VideoThumbail() {
  const classes = useStyles();

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

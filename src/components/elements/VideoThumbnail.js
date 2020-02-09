import React from 'react';

import {Link} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#fff',
  },

  action: {
    '&:hover $focusHighlight': {
      opacity: 0,
    },
  },
  focusHighlight: {},

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

  content: {
    paddingLeft: 0,
    parringRight: 0,
  },

  media: {
    height: 160,
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
      <CardActionArea
        classes={{
          root: classes.action,
          focusHighlight: classes.focusHighlight,
        }}
        disableRipple
      >
        <CardMedia
          className={classes.media}
          component="img"
          image="https://picsum.photos/200"
          title="Video Thumbnail"
        />
        <CardContent className={classes.content}>
          <Grid container spacing={2} wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item>
              <Typography className={classes.title} gutterBottom variant="h6">
                Video title goes here
              </Typography>
              <Link className={classes.channel}>Channel Name</Link>

              <Typography className={classes.statistics} variant="subtitle2">
                1.1m views • 2 weeks
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';

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

  content: {
    paddingLeft: 0,
    parringRight: 0,
  },

  media: {
    height: 160,
  },
});

export default function VideoThumbail() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/200"
          title="Video Thumbnail"
        />
        <CardContent className={classes.content}>
          <Grid container spacing={2} wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item>
              <Typography component="p" gutterBottom>
                Video title goes here
              </Typography>
              <Typography component="p" variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

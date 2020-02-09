import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#fff',
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
        <CardContent>
          <Typography component="h2" gutterBottom variant="h5">
            Video title goes here
          </Typography>
          <Typography component="p" variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

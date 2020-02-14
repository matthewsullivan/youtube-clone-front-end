import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import SignInButton from '../elements/SignInButton';
import Typography from '@material-ui/core/Typography';


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

  title: {
    color: '#fff',
  },
}));

export default function Subscriptions() {
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
          <SubscriptionsIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography
            className={classes.title}
            color="inherit"
            component="h1"
            noWrap
            variant="h5"
          >
            Don’t miss new videos
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.body}
            color="inherit"
            component="p"
            noWrap
          >
            Sign in to see updates from your favorite YouTube channels
          </Typography>
        </Grid>
        <Grid item>
          <SignInButton />
        </Grid>
      </Grid>
    </Container>
  );
}

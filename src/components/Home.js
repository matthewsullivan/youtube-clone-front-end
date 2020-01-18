import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const styles = (theme) => ({
  container: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3.5),
    paddingTop: theme.spacing(4),
  },

  title: {
    color: '#fff',
  },
});

class Home extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  /**
   * Render
   * @return {jsx}
   */
  render() {
    const {classes} = this.props;

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
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Home);

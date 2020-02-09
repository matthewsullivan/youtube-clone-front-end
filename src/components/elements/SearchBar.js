import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: 0,
    marginTop: 0,
    maxWidth: 576,
    width: '50%',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" wrap="nowrap">
      <TextField
        className={classes.searchBar}
        placeholder="Search"
        variant="outlined"
      />
      <Button disableElevation variant="contained">
        <SearchIcon fontSize="small" />
      </Button>
    </Grid>
  );
}

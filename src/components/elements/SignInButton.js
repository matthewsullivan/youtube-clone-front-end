import React from 'react';

import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  signInButton: {
    border: '1px solid #3ea6ff',
    borderRadius: 2,
    color: '#3ea6ff',
    height: 40,
    padding: '2px 12px',
  },
}));

export default function SignInButton() {
  const classes = useStyles();

  return (
    <Button
      className={classes.signInButton}
      color="primary"
      size="large"
      startIcon={<AccountCircleIcon />}
      variant="outlined"
    >
      Sign In
    </Button>
  );
}

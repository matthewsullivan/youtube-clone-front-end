import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import Home from './components/Home';
import Template from './components/Template';
import primaryNavigation from './objects/navigation';

const drawerWidth = 240;
const primaryColor = '#272727';
const secondaryColor = '#1e1e1e';
const toolBarHeight = 56;

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        height: '32px',
      },

      contained: {
        backgroundColor: '#383838',
        color: '#747474',
        '&:hover': {
          backgroundColor: '#3e3e3e',
          color: '#9c9c9c',
        },
      },
    },

    MuiDivider: {
      root: {
        backgroundColor: '#3e3e3e',
        margin: '12px 0 8px',
      },
    },

    MuiFormControl: {
      marginDense: {
        marginBottom: 0,
        marginTop: 0,
        width: '100%',
        maxWidth: '576px',
      },
    },

    MuiList: {
      padding: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },

    MuiListItem: {
      root: {
        color: '#fff',
        height: 40,
        '&$selected': {
          backgroundColor: '#3e3e3e',
        },
        '&$selected:hover': {
          backgroundColor: '#525252',
        },
      },
      button: {
        '&:hover': {
          backgroundColor: '#3e3e3e',
        },
      },
    },

    MuiListItemIcon: {
      root: {
        color: '#909090',
        marginLeft: '8px',
        minWidth: '48px',
      },
    },

    MuiListItemText: {
      primary: {
        fontSize: '0.85rem',
        letterSpacing: '0.015em;',
      },
    },

    MuiOutlinedInput: {
      root: {
        background: '#121212',
        borderRadius: 0,
        height: '32px',
      },
      input: {
        color: '#fff',
        '&::placeholder': {
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 400,
        },
      },
      notchedOutline: {
        borderColor: '#383838',
      },
    },

    MuiToolbar: {
      regular: {
        background: primaryColor,
        minHeight: toolBarHeight,
        '@media (min-width: 600px)': {
          minHeight: toolBarHeight,
        },
      },
    },
  },
});

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },

  content: {
    background: secondaryColor,
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: toolBarHeight,
  },

  drawer: {
    background: primaryColor,
    color: '#fff',
    height: `calc(100vh - ${toolBarHeight}px)`,
    position: 'relative',
    paddingTop: '12px',
    top: toolBarHeight,
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },

  drawerClose: {
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },

  logo: {
    marginBottom: -5,
    width: 80,
  },

  menuButton: {
    marginRight: 12,
  },

  signInButton: {
    borderRadius: 2,
    color: '#3ea6ff',
    height: 40,
    padding: '2px 12px',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {open: true, selectedIndex: 0};
  }

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
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar elevation={0}>
              <Toolbar>
                <Grid alignItems="center" container justify="space-between">
                  <Grid item>
                    <IconButton
                      aria-label="open drawer"
                      className={clsx(classes.menuButton)}
                      color="inherit"
                      edge="start"
                      onClick={() => this._handleToggle()}
                    >
                      <MenuIcon />
                    </IconButton>
                    <img
                      alt="Application Logo"
                      className={classes.logo}
                      src="../logo.png"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      wrap="nowrap"
                    >
                      <TextField
                        placeholder="Search"
                        margin="dense"
                        variant="outlined"
                      />
                      <Button disableElevation variant="contained">
                        <SearchIcon fontSize="small" />
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid alignItems="center" container>
                      <Grid item>
                        <IconButton
                          aria-label="videos"
                          color="inherit"
                          edge="start"
                        >
                          <VideoCallIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          aria-label="videos"
                          color="inherit"
                          edge="start"
                        >
                          <AppsIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton
                          aria-label="videos"
                          color="inherit"
                          edge="start"
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Button
                          className={clsx(classes.signInButton)}
                          color="primary"
                          size="large"
                          startIcon={<AccountCircleIcon />}
                          variant="outlined"
                        >
                          Sign In
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>

            <Drawer
              classes={{
                paper: clsx(
                  classes.drawer,
                  !this.state.open && classes.drawerClose
                ),
              }}
              open={this.state.open}
              variant="permanent"
            >
              <List aria-label="main application navigation" component="nav">
                {this._getDrawerContent()}
              </List>
            </Drawer>

            <main className={classes.content}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/template" component={Template} />
              </Switch>
            </main>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }

  /**
   * Get Drawer Content
   * @return {jsx}
   */
  _getDrawerContent = () => {
    return primaryNavigation.map((item, index) => (
      <React.Fragment key={item.page}>
        <ListItem
          button
          component={Link}
          onClick={() => this._handleListItemClick(index)}
          selected={this.state.selectedIndex === index}
          to={item.component}
        >
          <ListItemIcon
            style={{
              color: this.state.selectedIndex === index ? '#fff' : '#909090',
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.page} />
        </ListItem>

        <Divider
          style={{
            display: index === 2 || index === 6 ? 'block' : 'none',
          }}
        />
      </React.Fragment>
    ));
  };

  /**
   * Handle List Item Click
   * @param {number} index
   */
  _handleListItemClick = (index) => {
    this.setState({selectedIndex: index});
  };

  /**
   * Handle Toggle
   */
  _handleToggle = () => {
    this.setState({open: !this.state.open});
  };
}

export default withStyles(styles)(App);

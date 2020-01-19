import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import MenuIcon from '@material-ui/icons/Menu';

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
    MuiDivider: {
      root: {
        backgroundColor: '#3e3e3e',
        margin: '12px 0',
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
        '&$selected': {backgroundColor: '#3e3e3e'},
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
    width: 80,
  },

  menuButton: {
    marginRight: 12,
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
   * Get Drawer Content
   * @return {jsx}
   */
  _getDrawerContent = () => {
    return primaryNavigation.map((item, index) => (
      <>
        <ListItem
          button
          component={Link}
          key={item.page}
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
      </>
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
              <List component="nav" aria-label="main application navigation">
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
}

export default withStyles(styles)(App);

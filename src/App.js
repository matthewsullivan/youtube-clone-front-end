import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

import {withStyles} from '@material-ui/core/styles';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import Home from './components/Home';
import Template from './components/Template';
import primaryNavigation from './objects/navigation';

const drawerWidth = 240;
const primaryColor = '#272727';
const secondaryColor = '#1e1e1e';
const toolBarHeight = 56;

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

  toolbar: {
    background: primaryColor,
    minHeight: toolBarHeight,
  },

  logo: {
    width: 80,
  },

  navList: {
    height: 40,
    color: '#fff',
  },

  navListIcon: {
    color: '#fff',
    marginLeft: '8px',
    minWidth: '48px',
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
   * @param {object} classes
   * @return {jsx}
   */
  _getDrawerContent = (classes) => {
    return primaryNavigation.map((item, index) => (
      <ListItem
        button
        className={clsx(classes.navList)}
        component={Link}
        key={item.page}
        onClick={() => this._handleListItemClick(index)}
        selected={this.state.selectedIndex === index}
        to={item.component}
      >
        <ListItemIcon className={clsx(classes.navListIcon)}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={item.page} />
      </ListItem>
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
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            className={clsx(classes.appBar, this.state.open)}
            elevation={0}
            position="absolute"
          >
            <Toolbar className={classes.toolbar}>
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
            {this._getDrawerContent(classes)}
            <Divider />
          </Drawer>

          <main className={classes.content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/template" component={Template} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);

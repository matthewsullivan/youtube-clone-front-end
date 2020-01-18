import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import FolderOpenSharp from '@material-ui/icons/FolderOpenSharp';
import DashboardIcon from '@material-ui/icons/Dashboard';

import {withStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import Home from './components/Home';
import Template from './components/Template';

const drawerWidth = 240;
const primaryColor = '#272727';
const secondaryColor = '#1e1e1e';
const toolBarHeight = 56;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  content: {
    background: secondaryColor,
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  drawerPaper: {
    background: primaryColor,
    color: '#fff',
    position: 'relative',
    top: toolBarHeight,
    whiteSpace: 'nowrap',
    width: drawerWidth,
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    overflow: 'auto',
  },
  toolbar: {
    background: primaryColor,
    minHeight: toolBarHeight,
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

    this.state = {open: true};
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
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
                onClick={this._handleToggle}
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
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose
              ),
            }}
            open={this.state.open}
            variant="permanent"
          >
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              onClick={this._handleTitle}
              to="/template"
            >
              <ListItemIcon>
                <FolderOpenSharp />
              </ListItemIcon>
              <ListItemText primary="Template" />
            </ListItem>

            <Divider />
          </Drawer>

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
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

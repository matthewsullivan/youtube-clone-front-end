import React from 'react';

import {useLocation} from 'react-router';
import {Switch, Route, Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppsIcon from '@material-ui/icons/Apps';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import {MuiThemeProvider, makeStyles} from '@material-ui/core/styles';

import clsx from 'clsx';

import History from './components/pages/History';
import Home from './components/pages/Home';
import Library from './components/pages/Library';
import Subscriptions from './components/pages/Subscriptions';
import Trending from './components/pages/Trending';

import SearchBar from './components/elements/SearchBar';
import SignInButton from './components/elements/SignInButton';

import {theme} from './common/theme';
import {footerData, sidebarData} from './model/navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },

  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: 56,
  },

  copyright: {
    color: '#717171',
    marginTop: 32,
  },

  drawer: {
    color: '#fff',
    height: `calc(100vh - 56px)`,
    position: 'relative',
    paddingTop: 12,
    top: 56,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      width: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(9),
    },
    [theme.breakpoints.up('lg')]: {
      width: 240,
    },
  },

  drawerNarrow: {
    width: theme.spacing(9),
  },

  drawerMobile: {
    color: '#fff',
    height: '100vh',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
  },

  drawerTitle: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: 500,
    padding: '0 24px',
    textTransform: 'uppercase',
  },

  footer: {
    padding: '8px 24px',
  },

  footerLink: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: 600,
    lineHeight: '1.2rem',
    marginRight: 8,
    textDecoration: 'none',
  },

  logo: {
    marginBottom: -5,
    width: 80,
  },

  menuButton: {
    marginRight: 12,
  },

  sideBarSmall: {
    height: 72,
  },

  sideBarSmallText: {
    fontSize: 10,
    marginLeft: -16,
  },

  signIn: {
    padding: '6px 32px',
    whiteSpace: 'pre-line',
  },

  signInMessage: {
    paddingBottom: 8,
  },
}));

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const location = useLocation();

  const index = sidebarData.findIndex((page) =>
    page.path.includes(location.pathname.substring(1))
  );

  const [selectedIndex, setIndex] = React.useState(index);

  const classes = useStyles();
  const screenNarrow = useMediaQuery(theme.breakpoints.down('md'));
  const screenSmall = useMediaQuery('(max-width:664px)');

  /**
   * Get Drawer Content
   * @return {JSX}
   */
  const getDrawerContent = () => {
    return (
      <>
        {sidebarData.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              component={Link}
              onClick={() => handleListItemClick(index)}
              selected={selectedIndex === index}
              to={item.path}
            >
              <ListItemIcon
                style={{
                  color: selectedIndex === index ? '#fff' : '#909090',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.page} />
            </ListItem>

            <Divider
              hidden={
                index !== 2 &&
                index !== 4 &&
                index !== 13 &&
                index !== 14 &&
                index !== 16 &&
                index !== 20
              }
            />

            <div hidden={index !== 4}>
              <div className={classes.signIn}>
                <Typography
                  className={classes.signInMessage}
                  gutterBottom
                  variant="subtitle2"
                >
                  Sign in to like videos, comment, and subscribe.
                </Typography>

                <SignInButton />
              </div>
              <Divider />
              <Typography
                className={classes.drawerTitle}
                gutterBottom
                variant="subtitle1"
              >
                Best of Youtube
              </Typography>
            </div>

            <Typography
              className={classes.drawerTitle}
              gutterBottom
              hidden={index !== 14}
              variant="subtitle1"
            >
              More From YouTube
            </Typography>
          </React.Fragment>
        ))}

        <Grid
          alignItems="flex-start"
          className={classes.footer}
          container
          direction="row"
          justify="flex-start"
        >
          {footerData.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Link
                  className={classes.footerLink}
                  href={item.path}
                  to={item.path}
                >
                  {item.page}
                </Link>
              </Grid>
            </React.Fragment>
          ))}
          <Typography className={classes.copyright} variant="caption">
            © 2020 Google LLC
          </Typography>
        </Grid>
      </>
    );
  };

  /**
   * Get Menu Button Logo
   * @return {JSX}
   */
  const getMenuButtonLogo = () => {
    return (
      <Grid item>
        <IconButton
          aria-label="drawerOpen drawer"
          className={classes.menuButton}
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Link href="/" onClick={() => handleListItemClick(0)} to="/">
          <img
            alt="Application Logo"
            className={classes.logo}
            src="../logo.png"
          />
        </Link>
      </Grid>
    );
  };

  /**
   * Handle Drawer Toggle
   */
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  /**
   * Handle Search Toggle
   */
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  /**
   * Handle List Item Click
   * @param {number} index
   */
  const handleListItemClick = (index) => {
    setIndex(index);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar elevation={0}>
          <Toolbar
            className={classes.searchToolBar}
            style={{display: searchOpen && screenSmall ? 'flex' : 'none'}}
          >
            <Grid
              alignItems="center"
              container
              justify="space-between"
              wrap="nowrap"
            >
              <Grid item xs={1}>
                <IconButton
                  aria-label="close mobile search"
                  color="inherit"
                  edge="start"
                  onClick={handleSearchToggle}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
              </Grid>
              <Grid item xs={11}>
                <SearchBar />
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar
            style={{display: searchOpen && screenSmall ? 'none' : 'flex'}}
          >
            <Grid
              alignItems="center"
              container
              justify="space-between"
              wrap="nowrap"
            >
              {getMenuButtonLogo()}
              <Grid hidden={screenSmall} item md={6}>
                <Grid container direction="row" justify="center" wrap="nowrap">
                  <SearchBar />
                </Grid>
              </Grid>
              <Grid item>
                <Grid alignItems="center" container wrap="nowrap">
                  <Grid hidden={!screenSmall} item>
                    <IconButton
                      aria-label="search"
                      color="inherit"
                      edge="start"
                      onClick={handleSearchToggle}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Grid>
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
                    <SignInButton />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer
          classes={{
            paper: clsx(classes.drawerMobile),
          }}
          open={!drawerOpen && screenNarrow}
        >
          <Toolbar>
            <Grid
              alignItems="center"
              container
              justify="space-between"
              wrap="nowrap"
            >
              {getMenuButtonLogo()}
            </Grid>
          </Toolbar>

          <Divider
            style={{
              marginTop: 0,
            }}
          />

          {getDrawerContent()}
        </Drawer>

        <Drawer
          classes={{
            paper: clsx(classes.drawer, !drawerOpen && classes.drawerNarrow),
          }}
          open={drawerOpen}
          variant="permanent"
        >
          <List
            aria-label="main application navigation"
            component="nav"
            hidden={drawerOpen && !screenNarrow ? false : true}
          >
            {getDrawerContent()}
          </List>
          <List
            aria-label="main application narrow navigation view"
            component="nav"
            hidden={!drawerOpen || screenNarrow ? false : true}
          >
            {sidebarData.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  className={classes.sideBarSmall}
                  component={Link}
                  style={{display: index < 5 ? 'block' : 'none'}}
                  onClick={() => handleListItemClick(index)}
                  to={item.path}
                >
                  <Grid
                    alignItems="center"
                    container
                    direction="column"
                    justify="center"
                  >
                    <Grid item>
                      <ListItemIcon
                        style={{
                          color: selectedIndex === index ? '#fff' : '#909090',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </Grid>

                    <Grid item>
                      <Typography
                        className={classes.sideBarSmallText}
                        style={{
                          color: selectedIndex === index ? '#fff' : '#909090',
                        }}
                        variant="caption"
                      >
                        {item.page}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Drawer>

        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/library" component={Library} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </main>
      </div>
    </MuiThemeProvider>
  );
}

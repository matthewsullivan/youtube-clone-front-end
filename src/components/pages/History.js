import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import HistoryIcon from '@material-ui/icons/History';

import {makeStyles} from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import SignInButton from '../elements/SignInButton';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 0,
    paddingLeft: 0,
  },

  body: {
    color: '#fff',
  },

  history: {
    height: 264,
    marginTop: 144,
  },

  icon: {
    color: '#909090',
    height: 96,
    width: 96,
  },

  link: {
    color: '#3ea6ff',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.2,
    textDecoration: 'none',
  },

  tabs: {
    background: '#000',
    color: '#fff',
    height: 'calc(100vh - 64px)',
    [theme.breakpoints.down('xs')]: {
      background: '#1e1e1e',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },

  title: {
    color: '#fff',
  },
}));

/**
 * A11y Props
 * @param {number} index
 * @return {object}
 */
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

/**
 * Tab Panel
 * @param {object} props
 * @return {JSX}
 */
function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function History() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container direction="row-reverse">
        <Grid item md={4} xs={12}>
          <Tabs
            aria-label="History tabs"
            className={classes.tabs}
            orientation="vertical"
            onChange={handleChange}
            value={value}
          >
            <Tab label="Watch history" {...a11yProps(0)} />
            <Tab label="Search history" {...a11yProps(1)} />
            <Tab label="Comments" {...a11yProps(2)} />
            <Tab label="Community" {...a11yProps(3)} />
            <Tab label="Live Chat" {...a11yProps(4)} />
          </Tabs>
        </Grid>

        <Grid item md={8} xs={12}>
          <TabPanel value={value} index={0}>
            <Grid
              alignItems="center"
              className={classes.history}
              container
              direction="column"
              justify="space-around"
            >
              <Grid item>
                <HistoryIcon className={classes.icon} />
              </Grid>
              <Grid item>
                <Typography
                  className={classes.title}
                  color="inherit"
                  component="h1"
                  noWrap
                  variant="h5"
                >
                  Keep track of what you watch
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.body}
                  color="inherit"
                  component="p"
                  noWrap
                >
                  Watch history isn't viewable when signed out.{' '}
                  <a
                    className={classes.link}
                    href={
                      'https://support.google.com/youtube/answer/95725?hl=en'
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <SignInButton />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );

  /**
   * Handle Change
   * @param {object} event
   * @param {string} value
   */
  const handleChange = (event, value) => {
    setValue(value);
  };
}

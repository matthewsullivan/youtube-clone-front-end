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
    background: '#151515',
    color: '#fff',
    height: 'calc(100vh - 64px)',
    padding: 30,
    [theme.breakpoints.down('xs')]: {
      background: '#1e1e1e',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },

  tab: {
    borderBottom: '1px solid #3e3e3e',
    height: 56,
    textAlign: 'left',
    textTransform: 'none',
    maxWidth: '100%',
    '& span': {
      display: 'initial',
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
  const {children, index, value, ...other} = props;

  return (
    <Typography
      aria-labelledby={`vertical-tab-${index}`}
      component="div"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      role="tabpanel"
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

  /**
   * Handle Change
   * @param {object} event
   * @param {string} value
   */
  const handleChange = (event, value) => {
    setValue(value);
  };

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
            <Tab
              className={classes.tab}
              disableRipple
              label="Watch history"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              label="Search history"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              label="Comments"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              label="Community"
              {...a11yProps(3)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              label="Live Chat"
              {...a11yProps(4)}
            />
          </Tabs>
        </Grid>

        <Grid item md={8} xs={12}>
          <TabPanel index={0} value={value}>
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
          <TabPanel index={1} value={value}>
            Item Two
          </TabPanel>
          <TabPanel index={2} value={value}>
            Item Three
          </TabPanel>
          <TabPanel index={3} value={value}>
            Item Four
          </TabPanel>
          <TabPanel index={4} value={value}>
            Item Five
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

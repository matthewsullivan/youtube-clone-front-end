import React from 'react';

import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import HistoryIcon from '@material-ui/icons/History';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import {makeStyles} from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import SignInButton from '../elements/SignInButton';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 0,
    paddingLeft: 0,
  },

  actionButtons: {
    color: '#aaa',
    paddingTop: 12,
  },

  actionButton: {
    color: '#aaa',
  },

  body: {
    color: '#fff',
    textAlign: 'center',
  },

  checkedIcon: {
    color: '#3ea6ff',
  },

  history: {
    height: 264,
    marginTop: 144,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },

  indicator: {
    display: 'none',
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

  tab: {
    borderBottom: '1px solid #3e3e3e',
    minHeight: 56,
    textAlign: 'right',
    textTransform: 'none',
    maxWidth: '100%',
    '& span': {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
  },

  tabs: {
    background: '#151515',
    color: '#fff',
    height: 'calc(100vh - 64px)',
    padding: '12px 30px',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      background: '#1e1e1e',
      height: 'auto',
    },
  },

  tabsTitle: {
    borderBottom: '1px solid #3e3e3e',
    color: '#fff',
    fontWeight: 600,
    padding: 12,
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
  const [open, setOpen] = React.useState(false);
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

  /**
   * Handle Close
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Handle Open
   */
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container direction="row-reverse">
        <Grid className={classes.tabs} item md={4} xs={12}>
          <Typography
            className={classes.tabsTitle}
            color="inherit"
            component="h1"
            noWrap
          >
            History type
          </Typography>
          <Tabs
            aria-label="History tabs"
            classes={{indicator: classes.indicator}}
            orientation="vertical"
            onChange={handleChange}
            value={value}
          >
            <Tab
              className={classes.tab}
              disableRipple
              icon={
                value === 0 ? (
                  <RadioButtonCheckedIcon className={classes.checkedIcon} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )
              }
              label="Watch history"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              icon={
                value === 1 ? (
                  <RadioButtonCheckedIcon className={classes.checkedIcon} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )
              }
              label="Search history"
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              icon={
                value === 2 ? (
                  <RadioButtonCheckedIcon className={classes.checkedIcon} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )
              }
              label="Comments"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              icon={
                value === 3 ? (
                  <RadioButtonCheckedIcon className={classes.checkedIcon} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )
              }
              label="Community"
              {...a11yProps(3)}
            />
            <Tab
              className={classes.tab}
              disableRipple
              icon={
                value === 4 ? (
                  <RadioButtonCheckedIcon className={classes.checkedIcon} />
                ) : (
                  <RadioButtonUncheckedIcon />
                )
              }
              label="Live Chat"
              {...a11yProps(4)}
            />
          </Tabs>

          <Grid
            alignItems="flex-start"
            className={classes.actionButtons}
            container
            direction="column"
          >
            <Button
              className={classes.actionButton}
              onClick={handleOpen}
              xs={12}
            >
              Clear all watch history
            </Button>
            <Button className={classes.actionButton} xs={12}>
              Pause wath history
            </Button>
          </Grid>
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
                  Watch history isn&apos;t viewable when signed out.
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
            <Typography
              className={classes.body}
              color="inherit"
              component="p"
              noWrap
            >
              Search history isn&apos;t viewable when signed out.
            </Typography>
          </TabPanel>
          <TabPanel index={2} value={value}>
            <Typography
              className={classes.body}
              color="inherit"
              component="p"
              noWrap
            >
              <Link className={classes.link} to={'/'}>
                Sign in
              </Link>{' '}
              to view your comments
            </Typography>
          </TabPanel>
          <TabPanel index={3} value={value}>
            <Typography
              className={classes.body}
              color="inherit"
              component="p"
              noWrap
            >
              <Link className={classes.link} to={'/'}>
                Sign in
              </Link>{' '}
              to view your Community history
            </Typography>
          </TabPanel>
          <TabPanel index={4} value={value}>
            <Typography
              className={classes.body}
              color="inherit"
              component="p"
              noWrap
            >
              <Link className={classes.link} to={'/'}>
                Sign in
              </Link>{' '}
              to view your live chat history
            </Typography>
          </TabPanel>
        </Grid>
      </Grid>
      <Dialog
        aria-labelledby="customized-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <MuiDialogContent dividers>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus color="primary" onClick={handleClose}>
            Save changes
          </Button>
        </MuiDialogActions>
      </Dialog>
    </Container>
  );
}

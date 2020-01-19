import React from 'react';

import FeedbackIcon from '@material-ui/icons/Feedback';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const primaryNavigation = [
  {
    component: '',
    page: 'Home',
    icon: <HomeIcon />,
  },
  {
    component: '',
    page: 'Trending',
    icon: <WhatshotIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Subscriptions',
    icon: <SubscriptionsIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Library',
    icon: <VideoLibraryIcon />,
  },
  {
    component: '',
    page: 'History',
    icon: <HistoryIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Settings',
    icon: <SettingsIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Report History',
    icon: <FlagIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Help',
    icon: <HelpIcon fontSize="small" />,
  },
  {
    component: '',
    page: 'Send Feedback',
    icon: <FeedbackIcon fontSize="small" />,
  },
];

export {primaryNavigation as default};

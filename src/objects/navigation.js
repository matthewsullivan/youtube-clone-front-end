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
    icon: <WhatshotIcon />,
  },
  {
    component: '',
    page: 'Subscriptions',
    icon: <SubscriptionsIcon />,
  },
  {
    component: '',
    page: 'Library',
    icon: <VideoLibraryIcon />,
  },
  {
    component: '',
    page: 'History',
    icon: <HistoryIcon />,
  },
  {
    component: '',
    page: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    component: '',
    page: 'Report History',
    icon: <FlagIcon />,
  },
  {
    component: '',
    page: 'Help',
    icon: <HelpIcon />,
  },
  {
    component: '',
    page: 'Send Feedback',
    icon: <FeedbackIcon />,
  },
];

export {primaryNavigation as default};

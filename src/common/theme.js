import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        height: 32,
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

    MuiDrawer: {
      paper: {
        background: '#272727',
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
        marginLeft: 8,
        minWidth: 48,
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
        height: 32,
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
        background: '#272727',
        minHeight: 56,
        '@media (min-width: 600px)': {
          minHeight: 56,
        },
      },
    },
  },
});

export {theme};

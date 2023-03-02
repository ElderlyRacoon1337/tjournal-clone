import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 7,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.1)',
        },
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'inherit',
          fontSize: 16,
          transition: 'none',
          fontWeight: '500',
          // boxShadow: 'none',
          boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.1)',
          '&:hover': { boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.1)' },
          '&:active': {
            transform: 'translateY(1px)',
          },
        },

        contained: {
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
          },
        },
        containedPrimary: {
          backgroundColor: '#4683D9',
          '&:hover': {
            backgroundColor: '#437CCE',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#4683D9',
    },
    secondary: {
      main: '#FFF5E6',
    },
    background: {
      default: '#F5F4F5',
    },
  },
});

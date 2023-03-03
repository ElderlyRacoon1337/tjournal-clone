import { createTheme, PaletteMode } from '@mui/material';

let mode: PaletteMode = 'light';
export const theme = createTheme({
  palette: {
    mode,
    // @ts-ignore
    ...(mode === 'light'
      ? {
          text: {
            primary: '#000',
            secondary: 'rgb(83, 100, 113)',
          },
          background: {
            default: '#F5F4F5',
            paper: '#fff',
          },
          switch: 'white',
        }
      : {
          background: {
            default: '#000',
            paper: '#171717',
          },
          text: {
            primary: '#fff',
            secondary: '#6F7478',
          },
          switch: 'black',
        }),

    primary: {
      main: '#4683D9',
    },
    secondary: {
      main: '#FFF5E6',
    },
  },
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
          boxShadow: 'none',
          '&:active': {
            transform: 'translateY(1px)',
          },
        },

        contained: {
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.1)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.2)',
          },
        },
        containedPrimary: {
          backgroundColor: '#4683D9',
          '&:hover': {
            backgroundColor: '#437CCE',
          },
        },
        containedSecondary: {
          backgroundColor: 'rgba(0,0,0,0.1)',
          color: 'inherit',
          boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
            boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.2)',
          },
        },
      },
    },
  },
});

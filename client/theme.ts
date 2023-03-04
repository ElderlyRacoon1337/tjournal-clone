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
          switch: {
            main: 'white',
          },
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
          switch: {
            main: 'black',
          },
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
        root: ({ ownerState, theme }) => ({
          borderRadius: '8px',
          textTransform: 'inherit',
          fontSize: 16,
          transition: 'none',
          fontWeight: '500',
          boxShadow: 'none',
          '&:active': {
            transform: 'translateY(1px)',
          },
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: 'primary',
              boxShadow: '0px 0px 5px 0px rgba(34, 60, 80, 0.3)',
              '&:hover': {
                boxShadow: '0px 0px 10px 0px rgba(34, 60, 80, 0.3)',
              },
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'secondary' && {
              backgroundColor:
                theme.palette.mode == 'dark' ? 'rgba(0,0,0,0.5)' : 'white',
              color: 'inherit',
              boxShadow:
                theme.palette.mode == 'dark'
                  ? '0px 1px 1px 0px rgb(0, 0, 0 / 15%), 0px 4px 7px 0px rgb(0, 0, 0 / 5%), 0px -1px 0px rgb(0, 0, 0 / 5%), -1px 0px 0px rgb(0, 0, 0 / 5%), 1px 0px 0px rgb(0, 0, 0 / 5%)'
                  : '0px 1px 1px 0px rgb(0, 0, 0 / 15%), 0px 4px 7px 0px rgb(0, 0, 0 / 5%), 0px -1px 0px rgb(0, 0, 0 / 5%), -1px 0px 0px rgb(0, 0, 0 / 5%), 1px 0px 0px rgb(0, 0, 0 / 5%)',
              '&:hover': {
                backgroundColor:
                  theme.palette.mode == 'dark' ? 'rgba(0,0,0,0.5)' : 'white',
                boxShadow:
                  theme.palette.mode == 'dark'
                    ? '0px 1px 1px 0px rgb(0, 0, 0 / 18%), 0px 4px 7px 0px rgb(0, 0, 0 / 8%), 0px -1px 0px rgb(0, 0, 0 / 8%), -1px 0px 0px rgb(0, 0, 0 / 8%), 1px 0px 0px rgb(0, 0, 0 / 15%)'
                    : '0px 1px 1px 0px rgb(0, 0, 0 / 18%), 0px 4px 7px 0px rgb(0, 0, 0 / 8%), 0px -1px 0px rgb(0, 0, 0 / 8%), -1px 0px 0px rgb(0, 0, 0 / 8%), 1px 0px 0px rgb(0, 0, 0 / 15%)',
              },
            }),
        }),
      },
    },
  },
});

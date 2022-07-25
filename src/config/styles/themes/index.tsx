import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    background: {
      default: '#292929',
    },

  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },

    background: {
      default: '#cccccc',
    },
  },
});

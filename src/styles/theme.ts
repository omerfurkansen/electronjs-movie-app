import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#121222',
    },
    secondary: {
      main: '#292524',
    },
    divider: '#292524',
    text: {
      primary: '#292524',
      secondary: '#BEBEBE',
    },
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: 'Pathway Extreme, sans-serif',
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#F5F7F8',
      light: '#000',
    },
    secondary: {
      main: '#BEBEBE',
      contrastText: '#000',
    },
    divider: '#292524',
    text: {
      primary: '#595250',
      secondary: '#000',
    },
    background: {
      default: '#BEBEBE',
    },
  },
  typography: {
    fontFamily: 'Pathway Extreme, sans-serif',
  },
});
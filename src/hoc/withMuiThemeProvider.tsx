import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../styles/theme';
import { useAppSelector } from '../hooks/redux';
import { selectTheme } from '../features/app-theme/appThemeSlice';

const withMuiThemeProvider = <P extends object>(WrappedComponent: React.ComponentType<P>) => { 
  return (props: P & { readonly children?: React.ReactNode }) => {
    const isLightTheme = useAppSelector(selectTheme) === 'dark';

    return (
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };
};

export default withMuiThemeProvider;

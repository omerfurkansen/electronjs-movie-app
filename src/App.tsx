import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { linking} from './navigation/config';
import withMuiThemeProvider from './hoc/withMuiThemeProvider';
import withToast from './hoc/withToast';
import withLoader from './hoc/withLoader';

const App: React.FC = () => {
  return (
    <NavigationContainer 
      linking={linking}
    >
      <StackNavigator />
    </NavigationContainer>
  );
};

export default withMuiThemeProvider(withLoader(withToast(App)));

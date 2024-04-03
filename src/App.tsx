import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { linking} from './navigation/config';
import withMuiThemeProvider from './hoc/withMuiThemeProvider';

const App: React.FC = () => {
  return (
    <NavigationContainer 
      linking={linking}
    >
      <StackNavigator />
    </NavigationContainer>
  );
};

export default withMuiThemeProvider(App);

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import Header from '../components/Header/Header';
import { RootStackParamList } from '../types/StackNavigator';
import { StackScreen } from '../enums/StackScreens';

const Stack = createStackNavigator<RootStackParamList>();

const HeaderComp = () => <Header />;

const StackNavigator: React.FC = () => {
  return (
      <Stack.Navigator
        initialRouteName={StackScreen.Home}
        screenOptions={{
          header: HeaderComp,
          title: 'Movies App',
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name={StackScreen.Home}
          component={HomeScreen}
        />
        <Stack.Screen
          name={StackScreen.MovieDetail}
          component={MovieDetailScreen}
        />
        {/* Add more screens here... */}
      </Stack.Navigator>
  );
};

export default StackNavigator;

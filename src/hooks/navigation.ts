import { useNavigation, useRoute, RouteProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RouteParamList } from '../types/StackNavigator';

// Easy access to the navigation prop
export const useAppNavigation = () => useNavigation<StackNavigationProp<RootStackParamList>>();
// Easy access to the route prop
export const useAppRoute = () => useRoute<RouteProp<ParamListBase> & RouteParamList>();
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  AppScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  WelcomeScreen,
} from './screens';

const AppNavigator = createStackNavigator(
  {
    AppScreen,
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    WelcomeScreen,
  },
  {
    initialRouteName: 'WelcomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);

import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';

import { Platform, StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenNames } from '../enums';

import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import ListExerciseScreen from './ExerciseLibraryScreen';
import WorkoutScreen from './WorkoutScreen';
import ExerciseScreen from './ExerciseScreen';
import CompleteExerciseScreen from './CompleteExerciseScreen';
import WorkoutPlaylistScreen from './WorkoutPlaylistScreen';
import SettingsScreen from './SettingsScreen';
import UserContainerScreen from './UserContainerScreen'; // Contains the statistics and info related to the user

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const iconSize = 30;

const AppScreen = () => {
  return (
    <>
      {Platform.OS === 'android' ? (
        <StatusBar
          backgroundColor={colors.solidWhite}
          barStyle="dark-content"
        />
      ) : null}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider style={{ flex: 1 }}>
            <NavigationContainer>
              <HomeStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ScreenNames.SPLASH_SCREEN}
    >
      <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen
        name={ScreenNames.USER_CONTAINER}
        component={UserContainerScreen}
      />
      <Stack.Screen name={ScreenNames.HOME} component={TabNav} />
      <Stack.Screen name={ScreenNames.WORKOUT} component={WorkoutScreen} />
      <Stack.Screen name={ScreenNames.EXERCISE} component={ExerciseScreen} />
      <Stack.Screen
        name={ScreenNames.EXERCISE_COMPLETED}
        component={CompleteExerciseScreen}
      />
      <Stack.Screen
        name={ScreenNames.WORKOUTPLAYLIST}
        component={WorkoutPlaylistScreen}
      />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: Platform.OS === 'android' ? hp('7%') : hp('8.2%'),
          backgroundColor: colors.secondary_container,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
        <Tab.Screen
            name={ScreenNames.HOME}
            component={HomeScreen}
            options={{
                tabBarLabel: '',
                tabBarIcon: ({ focused }) => (
                    <Icon
                    name="home-filled"
                    size={iconSize}
                    color={focused ? colors.app_Tint_dark : colors.app_color_secondary}
                    style={{ top: 10 }}
                    />
                ),
            }}
        />
      <Tab.Screen
        name={ScreenNames.LIST_EXERCISE}
        component={ListExerciseScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="format-list-bulleted"
              size={iconSize}
              color={focused ? colors.app_Tint_dark : colors.app_color_secondary}
              style={{ top: 10 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={iconSize}
              color={focused ? colors.app_Tint_dark : colors.app_color_secondary}
              style={{ top: 10 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppScreen;
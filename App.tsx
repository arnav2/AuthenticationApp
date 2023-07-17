import React from 'react';
import {Provider} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src';
import {theme} from './src/core/theme';
import {Amplify, Auth} from 'aws-amplify';
import config from './src/aws-exports';
import signUpConfig from './amplify/signUpConfig';

Amplify.configure(config);

const Main = () => {
  // Auth.signOut()
  return(
    <SafeAreaProvider>
      <Provider theme={theme}>
        <App />
      </Provider>
    </SafeAreaProvider>
)};

export default Main;

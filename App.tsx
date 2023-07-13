import React from 'react';
import {Provider} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src';
import {theme} from './src/core/theme';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);

const Main = () => (
  <SafeAreaProvider>
  <Provider theme={theme}>
    <App />
  </Provider>
  </SafeAreaProvider>
);

export default withAuthenticator(Main);

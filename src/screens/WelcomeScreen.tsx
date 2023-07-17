import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../utils/Header';
import Button from '../utils/Button';
import Paragraph from '../components/Paragraph';
import { TNavigation } from '../types';

type Props = {
  navigation: TNavigation;
};

const WelcomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>
    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(WelcomeScreen);

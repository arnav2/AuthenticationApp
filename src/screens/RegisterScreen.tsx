import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../utils/Header';
import Button from '../utils/Button';
import TextInput from '../utils/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { TNavigation } from '../types';
import { Auth } from 'aws-amplify';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../core/utils';

enum UserGender {
  Male,
  Female
}

type SignUpParameters = {
  username: string | undefined; // email is the username for our purposes.
  password: string | undefined;
  name: string | undefined;
};

interface IState {
  value: string | undefined,
  error: string | null
}

type Props = {
  navigation: TNavigation;
};

export async function signUp({ username, password, name }: SignUpParameters, onSuccessNavigationAction: () => void) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        name
      },
      autoSignIn: {
        enabled: true,
      },
    });
    console.log(user);
    onSuccessNavigationAction()
  } catch (e) {
    Alert.alert('Error signing up:', e.message);
  }
}

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState<IState>({ value: undefined, error: null });
  const [email, setEmail] = useState<IState>({ value: undefined, error: null });
  const [password, setPassword] = useState<IState>({ value: undefined, error: null });

  const _onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const signUpParameters = {username: email.value, password: password.value, name: name.value}

    signUp(signUpParameters, () => navigation.navigate('Home'))
    
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const GoogleSignInButton: React.FC = () => {
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google user info:', userInfo);
      // Use the user info for further operations (e.g., authentication)
    } catch (error) {
      console.log('Google sign-in error:', error);
    }
  };

  return (
    <View>
      <Text>Sign in with Google</Text>
      <TouchableOpacity onPress={handleGoogleSignIn}>
        <GoogleSigninButton />
      </TouchableOpacity>
    </View>
  );
};

export default GoogleSignInButton;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const ErrorCard = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  errorText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorCard;
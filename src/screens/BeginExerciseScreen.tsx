import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { IRootStackParamList } from '../interfaces/interfaces';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScreenNames } from '../enums';

const BeginExerciseScreen: React.FC = () => {
  const handleStartExercise = () => {
    // Logic to start the exercise
  };

  const handleSkipExercise = () => {
    // Logic to skip the exercise
    // Go to the exerice in the workout or complete exercise. 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Begin Exercise</Text>
      <Text style={styles.description}>Get ready to start the exercise!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStartExercise}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={handleSkipExercise}
      >
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 32,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipButton: {
    padding: 8,
  },
  skipButtonText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default BeginExerciseScreen;
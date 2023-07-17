import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Alert,
  BackHandler,
  StatusBar,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import ExerciseCard from '../components/ExerciseCard';
import BreakPauseScreen from './BreakPauseScreen';
import { ScreenNames } from '../enums';
import NativeButton from '../components/NativeButton';
import ExerciseHeader from '../components/ExerciseHeader';
import CompleteExerciseScreen from './CompleteExerciseScreen';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';
import WorkoutCard from '../components/WorkoutCard';

interface WorkoutPlaylistProps {
  navigation: any;
  route: any;
}

const WorkoutPlaylistScreen: React.FC<WorkoutPlaylistProps> = ({ navigation, route }) => {
  const { workoutData } = route.params;
  const [currentIndex, setIndex] = useState(0);
  const [id, setId] = useState(workoutData.exercises[0].exerciseId)
  const [reps, setReps] = useState(workoutData.exercises[0].exerciseReps)
  const [image, setImage] = useState(workoutData.exercises[0].exerciseImage);
  const [name, setName] = useState(workoutData.exercises[0].exerciseName);
  const [description, setDescription] = useState(workoutData.exercises[0].exerciseDescription);
  const [delayExercise, setDelay] = useState(false);
  const [completeEx, setComplete] = useState(false);

  const settingSelector = useSelector((state: any) => state.settings);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', quitWorkout);

      return () => BackHandler.removeEventListener('hardwareBackPress', quitWorkout);
    }, [currentIndex, delayExercise])
  );

  const onClickNext = () => {
    if (currentIndex < workoutData.exercises.length) {
      setId(workoutData.exercises[currentIndex].exerciseId)
      setReps(workoutData.exercises[0].exerciseReps)
      setImage(workoutData.exercises[currentIndex].exerciseImage);
      setName(workoutData.exercises[currentIndex].exerciseName);
      setDescription(workoutData.exercises[currentIndex].exerciseDescription);
      setIndex(currentIndex + 1);
      setDelay(!delayExercise);

      if (currentIndex !== 0) {
        manageBreak();
      } else {
        setDelay(!!delayExercise);
      }
    }

    if (currentIndex === workoutData.exercises.length) {
      setComplete(true);
    }
  };

  const manageBreak = () => {
    setTimeout(() => setDelay(!!delayExercise), settingSelector.breakTime * 1000);
  };

  const toggleBreak = () => {
    setDelay(!delayExercise);
  };

  const quitWorkout = () => {
    Alert.alert('Exit Workout!', 'Are you sure you want to exit workout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () =>
          navigation.reset({
            routes: [{ name: ScreenNames.HOME }],
          }),
      },
    ]);
    return true;
  };

  const renderComponent = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor={colors.solidWhite} barStyle="dark-content" />
        {!delayExercise && currentIndex > 0 ? (
          <ExerciseHeader goBack={() => navigation.goBack()} quit={quitWorkout} exerciseGroup={name} />
        ) : null}
        <View>
          {delayExercise || currentIndex === 0 ? (
            <BreakPauseScreen currentIndex={currentIndex} toggleButton={toggleBreak} />
          ) : (
            <ExerciseCard exerciseId={id} exerciseImage={image} exerciseName={name} exerciseDescription={description} exerciseReps={reps}/>
          )}
        </View>
        {delayExercise ? null : (
          <View style={styles.buttonContainer}>
            <NativeButton textName="Next" onClick={onClickNext} buttonWidth={'30%'} />
          </View>
        )}
      </SafeAreaView>
    );
  };

  return !completeEx ? renderComponent() : <CompleteExerciseScreen navigation={navigation} />;
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
  },
});

export default WorkoutPlaylistScreen;

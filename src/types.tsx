import { StackNavigationProp } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRootStackParamList } from './interfaces/interfaces';
import { ScreenNames } from './enums';

export type TNavigation = {
  navigate: (scene: string) => void;
};

export type TImage = {
  type: 'gif' | 'video' | 'image';
  file: File | HTMLImageElement | string;
}

// Define the workout card prop type for Workout screen
export type TWorkoutCardNavigationProp = NativeStackNavigationProp<IRootStackParamList, ScreenNames.WORKOUT>;

// Define the navigation prop type for ListExercise screen
export type TListExerciseNavigationProp = StackNavigationProp<IRootStackParamList, ScreenNames.LIST_EXERCISE>;

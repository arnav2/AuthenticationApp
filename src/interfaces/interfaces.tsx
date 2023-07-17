import { TImage } from "../types";
import { IUserInfo } from "./userInterface";
import { ScreenNames, ExerciseLevel, Equipment, MuscleGroups, ExercisePurposes, ExerciseTechniques, ExerciseTypes } from "../enums";

export interface IExercise {
    exerciseId: string, 
    exerciseName: string;
    exerciseDescription: string;
    exerciseImage: TImage;
    exerciseReps: number;
}
  
export interface IWorkout {
    workoutId: string,
    workoutName: string,
    workoutDescription: string,
    workoutImage: TImage;
    workoutExercises: IExercise[]
}

export interface IListExercise {
    category: string;
    subcategory: string;
}

export interface IRootStackParamList {
    [ScreenNames.HOME]: {user: IUserInfo};
    [ScreenNames.EXERCISE]: {exerciseId: string};
    [ScreenNames.WORKOUT]: { workoutId: string},
    [ScreenNames.SETTINGS]: {userID: string},
    [ScreenNames.HOMESTACK]: undefined,
    [ScreenNames.WORKOUTPLAYLIST]: { workoutId: string},
    [ScreenNames.EXERCISE_COMPLETED]: undefined,
    [ScreenNames.SPLASH_SCREEN]: undefined,
    [ScreenNames.USER_CONTAINER]: undefined,
    [ScreenNames.LIST_EXERCISE]: IListExercise,
    [ScreenNames.ANALYSIS]: undefined,
}

export interface IExerciseCategories {
    DIFFICULTY:  ExerciseLevel,
    EQUIPMENT: Equipment[],
    MUSCLE_GROUP: MuscleGroups[],
    EXERCISE_TYPES: ExerciseTypes[],
    EXERCISE_TECHNIQUES: ExerciseTechniques[],
    EXERCISE_PURPOSE: ExercisePurposes[]
}
import { Dispatch } from 'redux';
import { GET_EXERCISE_DATA, GET_EXERCISE_DATA_SUCCESS } from './types';
import { IExercise } from '../../interfaces/interfaces';

export const getExerciseRequestById = (data: {id: number}) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_EXERCISE_DATA,
            payload: data,
        });
    };
};

export const getExerciseSuccess = (exercise: IExercise) => {
    return {
      type: GET_EXERCISE_DATA_SUCCESS,
      payload: exercise,
    };
};

export const getExerciseFailure = (error) => {
    return {
      type: 'GET_EXERCISE_FAILURE',
      payload: error,
    };
};
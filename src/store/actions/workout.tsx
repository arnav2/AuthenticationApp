import { Dispatch } from 'redux';
import actions from './types';

const workout = (workouts: any[]) => {
  return (dispatch: Dispatch) => {
    const data = workouts.map((x) => {
      return Object.values(x).flat();
    });

    dispatch({
      type: actions.SET_EXERCISE_LIBRARY,
      payload: data.flat(),
    });
  };
};

export default {
  workout,
};
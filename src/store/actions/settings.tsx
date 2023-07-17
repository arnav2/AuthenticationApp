import { Dispatch } from 'redux';
import { SET_SOUND_DATA, SET_BREAK_TIME, SET_PAUSE_TIME } from './types';

export const toggleSound = (data: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_SOUND_DATA,
      payload: data,
    });
  };
};

export const setPauseTime = (data: number) => {
  return async (dispatch: Dispatch) => {
    console.log(data);
    dispatch({
      type: SET_PAUSE_TIME,
      payload: data,
    });
  };
};

export const setBreakTime = (data: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_BREAK_TIME,
      payload: data,
    });
  };
}
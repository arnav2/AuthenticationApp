
import buttonsData from '../../assets/data/timeSettings';
import { SET_BREAK_TIME, SET_PAUSE_TIME, SET_SOUND_DATA } from '../actions/types';

export interface SettingsState {
  sound: boolean;
  pauseTimeOptions: Readonly<any[]>;
  userName: string;
  userAge: number;
  userActive: number;
  breakTime: number;
}

const INITIAL_STATE: SettingsState = {
  sound: true,
  pauseTimeOptions: buttonsData,
  userName: '',
  userAge: 18,
  userActive: 3,
  breakTime: 10,
};

const settings = (state: SettingsState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_SOUND_DATA:
      return { ...state, sound: action.payload };
    case SET_PAUSE_TIME:
      return { ...state, pauseTimeOptions: action.payload };
    case SET_BREAK_TIME:
      return { ...state, breakTime: action.payload };
    default:
      return state;
  }
};

export default settings;

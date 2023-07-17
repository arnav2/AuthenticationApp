import { combineReducers } from 'redux';
import homeReducer from './home';
import settingsReducer from './settings';
import libraryReducer from './library';
import { HomeState } from './home'; // Assuming you have defined the state type for the home reducer
import { SettingsState } from './settings'; // Assuming you have defined the state type for the settings reducer
import { LibraryState } from './library'; // Assuming you have defined the state type for the library reducer

export interface RootState {
  home: HomeState;
  settings: SettingsState;
  library: LibraryState;
}

const rootReducer = combineReducers<RootState>({
  home: homeReducer,
  settings: settingsReducer,
  library: libraryReducer
});

export default rootReducer;
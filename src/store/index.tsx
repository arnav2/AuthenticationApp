import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { Persistor, PersistConfig } from 'redux-persist/es/types';
import logger from 'redux-logger';
import thunk, {ThunkAction} from 'redux-thunk';

import rootReducer, { RootState } from './reducers/index';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({reducer: persistedReducer, middleware: [thunk, logger]});

export const persistor: Persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { burgersReducer } from './burgers/slice';
import { coffeeClassicReducer } from './coffeeclassic/slice';
import { coffeeWithMilkReducer } from './coffeewithmilk/slice';
import { dessertsReducer } from './dessers/slice';
import { rollsReducer } from './rolls/slice';
import { hotDogsReducer } from './hotdogs/slice';
import { filtersReducer } from './filter/slice';
import { roomsReducer } from './rooms/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken']
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    coffeeClassic: coffeeClassicReducer,
    coffeeWithMilk: coffeeWithMilkReducer,
    desserts: dessertsReducer,
    burgers: burgersReducer,
    rolls: rollsReducer,
    hotDogs: hotDogsReducer,
    rooms: roomsReducer,
    filter: filtersReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

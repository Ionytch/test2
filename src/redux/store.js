// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactSlice';
// import { filtersReducer } from './filterSlice';


// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filtersReducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
// import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';

import {
    persistStore,
    persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filtersReducer,
//     },
//      middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });


export const persistor = persistStore(store);
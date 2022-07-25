import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './modules/rootReducers';

const persistConfig = {
  key: '@growbase_app',
  storage,
  whiteList: ['theme'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);
export const storeRedux = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_DEV === 'true',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(storeRedux);
export type AppDispatch = typeof storeRedux.dispatch;

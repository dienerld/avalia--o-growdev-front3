import { combineReducers } from '@reduxjs/toolkit';
import { themeReducers } from './theme/themeSlice';

export const rootReducers = combineReducers({
  theme: themeReducers,
});
export type StatesRedux = ReturnType<typeof rootReducers>

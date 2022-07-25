import { createSlice } from '@reduxjs/toolkit';

const initialState = 'light';
const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => (action.payload || initialState),
  },
});

export const { changeTheme } = slice.actions;
export const themeReducers = slice.reducer;

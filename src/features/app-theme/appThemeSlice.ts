import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ITheme } from '../../types/IAppTheme';

const initialState: ITheme = {
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

const appThemeSlice = createSlice({
  name: 'appTheme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    }
  },
});

export const { setTheme } = appThemeSlice.actions;

export const selectTheme = (state: RootState) => state.appTheme.theme;

export default appThemeSlice.reducer;
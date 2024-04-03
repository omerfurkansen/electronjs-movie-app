import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';
import appThemeReducer from './app-theme/appThemeSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    appTheme: appThemeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

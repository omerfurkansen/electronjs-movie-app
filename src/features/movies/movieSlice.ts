import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MovieState } from '../../types/MovieState';
import { RootState } from '../store';
import { getRandomMovies, getMovieById, searchMovies } from '../../api-sdk/movieApi';

const initialState: MovieState = {
  movies: null,
  selectedMovie: null,
  search: "",
  appError: undefined,
  appLoading: false
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (search?: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  if (search) {
    return searchMovies(search);
  }
  return getRandomMovies();
});

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail', async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  return getMovieById(id);
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state: MovieState) => {
        state.movies = null;
        state.appLoading = true;
        state.appError = undefined;
      })
      .addCase(fetchMovies.fulfilled, (state: MovieState, action) => {
        state.movies = action.payload;
        state.appLoading = false;
      })
      .addCase(fetchMovieDetail.pending, (state: MovieState) => {
        state.selectedMovie = null;
        state.appLoading = true;
        state.appError = undefined;
      })
      .addCase(fetchMovieDetail.fulfilled, (state: MovieState, action) => {
        state.selectedMovie = action.payload;
        state.appLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.appError = action.error.message;
          state.appLoading = false;
        }
      );
  },
});

export const { setSearch } = movieSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectSelectedMovie = (state: RootState) => state.movies.selectedMovie;
export const selectSearch = (state: RootState) => state.movies.search;
export const selectAppError = (state: RootState) => state.movies.appError;
export const selectAppLoading = (state: RootState) => state.movies.appLoading;

export default movieSlice.reducer;
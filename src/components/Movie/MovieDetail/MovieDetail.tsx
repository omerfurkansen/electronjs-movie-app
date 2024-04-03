import React, { useEffect } from 'react';
import { fetchMovieDetail, selectSelectedMovie } from '../../../features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import withFade from '../../../hoc/withFade';
import useImageLoader from '../../../hooks/useImageLoader';
import { useAppNavigation } from '../../../hooks/navigation';
import { StackScreen } from '../../../enums/StackScreens';
import { MovieDetailScreenProps } from '../../../types/MovieDetailScreen';
import MovieInformation from './MovieInformation/MovieInformation';

const MovieDetail: React.FC<MovieDetailScreenProps> = ({ movieId }) => {
  const dispatch = useAppDispatch();
  const selectedMovie = useAppSelector(selectSelectedMovie);
  const navigation = useAppNavigation();
  const isLoadingImage = useImageLoader(selectedMovie?.posterUrl || '');

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId)).then((result) => {
      // If there is no payload, navigate back to home screen
      if (!result.payload) {
        setTimeout(() => {
          navigation.navigate(StackScreen.Home);
        }, 3500);
      }
    });
  }, [dispatch, movieId, navigation]);

  if (!selectedMovie) {
    return null;
  }

  return (
    <MovieInformation
      selectedMovie={selectedMovie}
      isLoadingImage={isLoadingImage}
    />
  );
};

export default withFade(MovieDetail);

import React, { useEffect } from 'react';
import * as S from './styles';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { selectMovies, selectSearch, selectAppLoading, fetchMovies, setSearch } from '../../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import { IMovieBrief } from '../../../types/MovieState';
import NotFoundContainer from '../../NotFoundContainer/NotFoundContainer';

function MovieListing() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const search = useAppSelector(selectSearch);
  const isLoading = useAppSelector(selectAppLoading);

  useEffect(() => {
    dispatch(fetchMovies(search)).then((result) => {
      if (!result.payload) {
        setTimeout(() => {
          dispatch(setSearch(''));
        }, 3500);
      }
    });
  }, [dispatch, search]);

  const renderMovieBox = (content: IMovieBrief[] | null) => {
    if (content?.length) {
      return content.map((contentItem, id) => <MovieCard key={id} data={contentItem} />);
    } else if (search && !isLoading && content?.length === 0) {
      return <NotFoundContainer relatedTo={search} />;
    }
    return null;
  };

  return (
    <S.MovieContainer>
      {renderMovieBox(movies)}
    </S.MovieContainer>
  );
}

export default MovieListing;
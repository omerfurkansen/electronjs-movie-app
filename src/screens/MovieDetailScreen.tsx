import React from 'react';
import withPageWrapper from '../hoc/withPageWrapper';
import MovieDetailComponent from '../components/Movie/MovieDetail/MovieDetail';
import { useAppRoute } from '../hooks/navigation';

const MovieDetail: React.FC = () => {
  const route = useAppRoute();
  const { id } = route.params;

  return <MovieDetailComponent movieId={id} />;
};

export default withPageWrapper(MovieDetail);

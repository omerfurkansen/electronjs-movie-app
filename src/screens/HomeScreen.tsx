import React from 'react';
import MovieListing from '../components/Movie/MovieListing/MovieListing';
import withPageWrapper from '../hoc/withPageWrapper';

const Home: React.FC = () => {
  return <MovieListing />;
}

export default withPageWrapper(Home);
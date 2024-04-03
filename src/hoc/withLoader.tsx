import React from 'react';
import CircularLoader from '../components/CircularLoader/CircularLoader';
import { useAppSelector } from '../hooks/redux';
import { selectAppLoading } from '../features/movies/movieSlice';

const withLoader = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => {
    const isLoading = useAppSelector(selectAppLoading);

    return (
      <React.Fragment>
        <Component {...props as P} />
        {isLoading && <CircularLoader />}
      </React.Fragment>
    );
  };
};

export default withLoader;
import React from 'react';
import * as S from './styles';
import { Link } from '@react-navigation/native';
import withFade from '../../../hoc/withFade';
import useImageLoader from '../../../hooks/useImageLoader';
import { IMovieBrief } from '../../../types/MovieState';
import SkeletonMovieCard from '../SkeletonMovieCard/SkeletonMovieCard';
import { StackScreen } from '../../../enums/StackScreens';

function MovieCard({ data }: { data: IMovieBrief }) {
  // Custom hook designed to handle image loading
  const loading = useImageLoader(data.posterUrl);
  const toPath = { screen: StackScreen.MovieDetail, params: { id: data.id } };

  if (loading) {
    return <SkeletonMovieCard />;
  } 
    
  return (
    <S.MovieBox>
      <Link to={toPath}>
        <S.MovieBoxTop>
          <S.MovieBoxBackgroundImage 
            sx={{ background: `url(${data.posterUrl})` }}
          />
          <S.MovieBoxImage
            loading="lazy"
            src={data.posterUrl}
            alt={data.title}
          />
        </S.MovieBoxTop>
        <S.MovieBoxBottom>
          <S.MovieBoxInfo>
            <h4>{data.title}</h4>
          </S.MovieBoxInfo>
        </S.MovieBoxBottom>
      </Link>
    </S.MovieBox>
  );
}

export default withFade(MovieCard);
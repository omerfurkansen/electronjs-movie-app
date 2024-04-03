import React from "react";
import * as S from "./styles";
import SkeletonMovieCard from "../../SkeletonMovieCard/SkeletonMovieCard";
import { PosterProps } from "../../../../types/MovieDetailScreen";

const Poster: React.FC<PosterProps> = ({ posterUrl, isLoadingImage, title }) => (
  <S.PosterImgContainer>
    {isLoadingImage ? 
      <SkeletonMovieCard height='440px' /> :
      <S.PosterImg src={posterUrl} alt={title} />
    }
  </S.PosterImgContainer>
);

export default Poster;
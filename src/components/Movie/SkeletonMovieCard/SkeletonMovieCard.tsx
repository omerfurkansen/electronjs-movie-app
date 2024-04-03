import React from "react";
import * as S from "./styles";

const SkeletonMovieCard: React.FC<{ height?: string }> = ({ height = '300px' }) => (
  <S.SkeletonMovieBoxImage animation="wave" variant="rectangular" height={height} />
);

export default SkeletonMovieCard;
import { IMovieDetail } from "./MovieState";

export interface MovieDetailScreenProps {
  movieId: string;
}

export interface FeaturedReviewProps {
  rating: number;
  title: string;
  body: string;
  author: string;
}

export interface MovieInformationProps {
  selectedMovie: IMovieDetail;
  isLoadingImage: boolean;
}

export interface PosterProps {
  posterUrl: string;
  isLoadingImage: boolean;
  title: string;
}
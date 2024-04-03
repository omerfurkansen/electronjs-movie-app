export interface IMovieBrief {
  id: string;
  title: string;
  posterUrl: string;
}

export interface IMovieDetail {
  id: string;
  title: string;
  year: number;
  imdbUrl: string;
  posterUrl: string;
  actors: {
    name: string;
    url: string;
  }[];
  genre: string[];
  keywords: string[];
  description: string;
  runtimeInSeconds: number;
  rating: {
    value: number;
    count: number;
  };
  featuredReview: {
    author: string;
    title: string;
    body: string;
    rating: number;
  };
  totalReviewsCount: number;
}

export interface MovieState {
  movies: IMovieBrief[] | null;
  selectedMovie: IMovieDetail | null;
  search: string;
  appError: string | undefined;
  appLoading: boolean;
}
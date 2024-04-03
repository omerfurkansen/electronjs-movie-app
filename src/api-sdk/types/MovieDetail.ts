// DETAIL API

// API response
export interface MovieByIdResponse {
  fake: {
    '#IMDB_ID': string;
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_URL': string;
    '#IMG_POSTER': string;
  };
  short: {
    actor: {
      name: string;
      url: string;
    }[];
    genre: string[];
    keywords: string;
    description: string;
    aggregateRating: {
      ratingValue: number;
      ratingCount: number;
    };
    review: {
      author: {
        name: string;
      },
      name: string;
      reviewRating: {
        ratingValue: number;
      },
      reviewBody: string;
    };
  };
  main: {
    reviews: {
      total: number;
    };
    runtime: {
      seconds: number;
    };
  };
}

// Parsed response
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

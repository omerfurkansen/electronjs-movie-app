// SEARCH API

// API response
export interface MovieSearchResponse {
  description: {
    '#IMDB_ID': string;
    '#TITLE': string;
    '#IMG_POSTER': string;
  }[];
}

// Parsed response
export interface IMovieBrief {
  id: string;
  title: string;
  posterUrl: string;
}

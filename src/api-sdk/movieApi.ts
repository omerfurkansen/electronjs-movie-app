import { getRandomChar } from './helpers';
import httpClient from './httpClient';
import {
  MovieByIdResponse,
  IMovieDetail,
} from './types/MovieDetail';
import {
  MovieSearchResponse,
  IMovieBrief,
} from './types/MovieSearch';

// Function to search for movies
export const searchMovies = async (query: string): Promise<IMovieBrief[]> => {
  try {
    const response = await httpClient.get<MovieSearchResponse>(`?q=${query}`);
    const results = response.data.description.map((movie) => ({
        id: movie['#IMDB_ID'],
        title: movie['#TITLE'],
        posterUrl: movie['#IMG_POSTER'],
    }));
    return results;
  } catch (error) {
    console.error('Failed to search movies:', error);
    throw new Error('Failed to search movies');
  }
};

// Function to get a single movie by ID
export const getMovieById = async (id: string): Promise<IMovieDetail> => {
  try {
      const response = await httpClient.get<MovieByIdResponse>(`?tt=${id}`);
      const movieInformation = response.data;
      const movie: IMovieDetail = {
          id: movieInformation.fake['#IMDB_ID'],
          title: movieInformation.fake['#TITLE'],
          year: movieInformation.fake['#YEAR'],
          imdbUrl: movieInformation.fake['#IMDB_URL'],
          posterUrl: movieInformation.fake['#IMG_POSTER'],
          actors: movieInformation.short.actor.map((actor) => ({ name: actor.name, url: actor.url })),
          description: movieInformation.short.description,
          genre: movieInformation.short.genre,
          keywords: movieInformation.short.keywords?.split(',').map((keyword) => keyword.trim()) || [],
          rating: {
              value: movieInformation.short.aggregateRating?.ratingValue || 0,
              count: movieInformation.short.aggregateRating?.ratingCount || 0,
          },
          runtimeInSeconds: movieInformation.main?.runtime?.seconds || 0,
          featuredReview: {
            author: movieInformation.short.review?.author.name || '',
            title: movieInformation.short.review?.name || '',
            body: movieInformation.short.review?.reviewBody || '',
            rating: movieInformation.short.review?.reviewRating?.ratingValue || 0,
          },
          totalReviewsCount: movieInformation.main.reviews.total,
      };
      return movie;
  } catch (error) {
      console.error('Failed to get movie by ID:', error);
      throw new Error('Failed to get movie by ID');
  }
};

// Function to get random movies 
export const getRandomMovies = async (count: number = 10): Promise<IMovieBrief[]> => {
  let movies: IMovieBrief[] = [];
  while (movies.length < count) {
    const randomCharacter = getRandomChar();
    const searchResults = await searchMovies(randomCharacter);
    // Concatenate search results
    movies = movies.concat(searchResults);
    // Remove duplicates
    movies = movies.filter((movie, index, self) =>
      index === self.findIndex((m) => (
        m.id === movie.id
      ))
    );
  }
  // Shuffle the movies array
  movies.sort(() => Math.random() - 0.5);
  // Return only the specified number of movies
  return movies.slice(0, count);
};

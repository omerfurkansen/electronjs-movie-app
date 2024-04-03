import React from 'react';
import * as S from './styles';
import Poster from '../Poster/Poster';
import FeaturedReview from '../FeaturedReview/FeaturedReview';
import { convertSecondsToHrMin, formatNumber } from '../../../../utils';
import { MovieInformationProps } from '../../../../types/MovieDetailScreen';

const MovieInformation: React.FC<MovieInformationProps> = ({ selectedMovie, isLoadingImage }) => (
  <S.MovieDetailContainer>
    <S.BluredMovieBackground
      style={{ backgroundImage: `url(${selectedMovie.posterUrl})` }}
    />

    <Poster
      posterUrl={selectedMovie.posterUrl}
      isLoadingImage={isLoadingImage}
      title={selectedMovie.title}
    />

    <S.SectionInformation>
      <S.MovieTitle>{selectedMovie.title}</S.MovieTitle>

      <S.Subheader>{selectedMovie.year}</S.Subheader>

      <S.ChipsContainer>
        {selectedMovie.runtimeInSeconds > 0 && (
          <S.Runtime>{convertSecondsToHrMin(selectedMovie.runtimeInSeconds)}</S.Runtime>
        )}
        {selectedMovie.genre.map((genre) => (
          <S.Chip key={genre} label={genre} variant="outlined" size='small' />
        ))}
      </S.ChipsContainer>

      <S.RatingContainer>
        {selectedMovie.rating.value > 0 && (
          <React.Fragment>
            <S.Star />
            <span><b>{selectedMovie.rating.value}</b>/10</span>
            <S.TotalRatingCount>{`(${formatNumber(selectedMovie.rating.count)})`}</S.TotalRatingCount>
          </React.Fragment>
        )}
        <S.ImdbUrl href={selectedMovie.imdbUrl} target="_blank" rel="noreferrer">
          <S.LiveTv />
        </S.ImdbUrl>
      </S.RatingContainer>

      <S.MovieDescription dangerouslySetInnerHTML={{ __html: selectedMovie.description }} />

      <S.ActorsContainer>
        <span>Actors:</span>
        <S.ActorsActorContainer>
          {selectedMovie.actors.map((actor) => (
            <S.Actor key={actor.name} href={actor.url} target="_blank" rel="noreferrer">
              {actor.name}
            </S.Actor>
          ))}
        </S.ActorsActorContainer>
      </S.ActorsContainer>

      {selectedMovie.keywords.length > 0 && (
        <S.KeywordsContainer>
          <span>Keywords:</span>
          <S.KeywordsChipContainer>
            {selectedMovie.keywords.map((keyword) => (
              <S.Chip key={keyword} label={keyword} variant="outlined" size='small' />
            ))}
          </S.KeywordsChipContainer>
        </S.KeywordsContainer>
      )}

      {selectedMovie.totalReviewsCount > 0 && (
        <S.UserReviewsContainer>
          <S.Subheader>User Reviews</S.Subheader>
          <S.UserReviewsTotalCount>
            {formatNumber(selectedMovie.totalReviewsCount)}
          </S.UserReviewsTotalCount>
        </S.UserReviewsContainer>
      )}

      {selectedMovie.featuredReview.author && (
        <FeaturedReview
          author={selectedMovie.featuredReview.author}
          title={selectedMovie.featuredReview.title}
          body={selectedMovie.featuredReview.body}
          rating={selectedMovie.featuredReview.rating}
        />
      )}
    </S.SectionInformation>
  </S.MovieDetailContainer>
);

export default MovieInformation;

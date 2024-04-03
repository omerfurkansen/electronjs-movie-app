import React from 'react';
import * as S from './styles';
import { FeaturedReviewProps } from '../../../../types/MovieDetailScreen';

const FeaturedReview: React.FC<FeaturedReviewProps> = ({ rating, title, body, author }) => (
  <S.FeaturedReviewContainer>
    <S.FeaturedReviewContainerHeader>
      <S.FeaturedReviewTitle>
        FEATURED REVIEW
      </S.FeaturedReviewTitle>
      {rating > 0 && (
        <S.FeaturedReviewRating>
          <S.Star />
          <span>
            <b>{rating}</b>/10
          </span>
        </S.FeaturedReviewRating>
      )}
    </S.FeaturedReviewContainerHeader>
    <S.FeaturedReviewBody>
      <S.FeaturedReviewTextTitle dangerouslySetInnerHTML={{ __html: title }} />
      <S.FeaturedReviewTextBody dangerouslySetInnerHTML={{ __html: body }} />
      <S.FeaturedReviewAuthor>
        {`- ${author}`}
      </S.FeaturedReviewAuthor>
    </S.FeaturedReviewBody>
  </S.FeaturedReviewContainer>
);

export default FeaturedReview;
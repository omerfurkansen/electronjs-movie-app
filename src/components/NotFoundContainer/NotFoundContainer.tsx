import React from "react";
import * as S from "./styles";

const NotFoundContainer: React.FC<{ relatedTo: string }> = ({ relatedTo }) => {
  return (
    <S.NotFoundContainer>
      <span>We couldn't find anything related to <b>{relatedTo}</b></span>
      <span>Try searching for something else...</span>
    </S.NotFoundContainer>
  );
};

export default NotFoundContainer;
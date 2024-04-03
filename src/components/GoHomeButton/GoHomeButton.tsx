import React from 'react';
import * as S from './styles';
import { useAppRoute } from '../../hooks/navigation';
import { StackScreen } from '../../enums/StackScreens';
import { Link } from '@react-navigation/native';

const GoHomeButton: React.FC = () => {
  const route = useAppRoute();

  return (
    <S.GoHomeButtonContainer>
      {route.name !== StackScreen.Home && (
        <Link to={{ screen: StackScreen.Home }}>
          <S.GoHomeButton>
            <S.ArrowBackIcon />
            Home
          </S.GoHomeButton>
        </Link>
      )}
    </S.GoHomeButtonContainer>
  );
};

export default GoHomeButton;

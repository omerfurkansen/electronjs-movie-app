import React from 'react';
import * as S from './styles';
import { IconButtonProps } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useAppSelector } from '../../hooks/redux';
import { selectTheme } from '../../features/app-theme/appThemeSlice';

const ThemeSwitch: React.FC<IconButtonProps> = (props) => {
  const theme = useAppSelector(selectTheme);

  return (
    <S.IconButton onClick={props.onClick} disableRipple>
      {theme === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
    </S.IconButton>
  );
};

export default ThemeSwitch;
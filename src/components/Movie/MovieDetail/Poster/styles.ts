import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const PosterImgContainer = styled(Box)({
  maxWidth: '300px',
  width: '100%',
  zIndex: 0,
});

export const PosterImg = styled('img')({
  maxWidth: '300px',
  width: '100%',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px,' +
    'rgba(0, 0, 0, 0.12) 0px -12px 30px,' +
    'rgba(0, 0, 0, 0.12) 0px 4px 6px,' +
    'rgba(0, 0, 0, 0.17) 0px 12px 13px,' +
    'rgba(0, 0, 0, 0.09) 0px -3px 5px;',
});
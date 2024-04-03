import { alpha, styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

export const SkeletonMovieBoxImage = styled(Skeleton)(({ theme }) => ({
  borderRadius: '5px',
  margin: 'auto',
  backgroundColor: alpha(theme.palette.text.primary, .2),
  width: '90%',
  cursor: 'progress',
  '&::after': {
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, .05), transparent)',
  },

  [theme.breakpoints.down('md')]: {
    maxHeight: '200px',
  },
}));
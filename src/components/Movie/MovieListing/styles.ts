import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MovieContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gridGap: '15px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(120px, 1fr))`,
  },
}));
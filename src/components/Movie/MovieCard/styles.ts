import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MovieBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all .3s ease-in-out',
  opacity: .8,

  '&:hover': {
    transform: 'scale(1.01)',
    opacity: 1,
  },
}));

export const MovieBoxTop = styled(Box)(({ theme }) => ({
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.primary,
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    height: '200px',
  },
}));

export const MovieBoxBottom = styled(Box)({
  padding: '10px 0',
});

export const MovieBoxBackgroundImage = styled(Box)({
  position: 'absolute',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  opacity: 0.3,
  filter: 'blur(4px)',
});

export const MovieBoxImage = styled('img')({
  position: 'absolute',
  objectFit: 'cover',
  height: '100%',
  maxWidth: '100%',
  zIndex: 10,
});

export const MovieBoxInfo = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,

  '& h4': {
    background: `-webkit-linear-gradient(135deg, ${theme.palette.primary.light}, ${alpha(theme.palette.secondary.contrastText, .5)})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '12px',
    fontWeight: 500,
    margin: 0,
    letterSpacing: '.5px',
    textTransform: 'uppercase',
  },
}));

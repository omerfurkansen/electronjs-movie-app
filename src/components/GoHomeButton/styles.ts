import { styled, alpha } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';

export const GoHomeButton = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.secondary.contrastText, .6),
  fontSize: '1rem',
  transition: 'color 0.3s',
  fontFamily: theme.typography.fontFamily,

  '&:hover': {
    color: alpha(theme.palette.secondary.contrastText, .8),
    backgroundColor: 'transparent',
  },
}));

export const ArrowBackIcon = styled(ChevronLeft)({
  fontSize: '1rem',
});

export const GoHomeButtonContainer = styled(Box)({
  display: 'block',
  cursor: 'pointer',
  maxWidth: '74px',
  width: '100%',
});
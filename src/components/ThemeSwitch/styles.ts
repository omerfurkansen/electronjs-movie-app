import { styled, alpha } from '@mui/material/styles';
import {
  IconButton as MuiIconButton,
} from '@mui/material';

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: alpha(theme.palette.secondary.contrastText, .6),
  transition: 'color 0.3s',

  '&:hover': {
    color: alpha(theme.palette.secondary.contrastText, .8),
    backgroundColor: 'transparent',
  },
}));
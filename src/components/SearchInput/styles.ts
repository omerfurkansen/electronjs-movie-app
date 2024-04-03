import { alpha, styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const Form = styled('form')({
  maxWidth: '300px',
  width: '100%',
});

export const Search = styled(TextField)(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  background: alpha(theme.palette.secondary.main, .4),
  
  borderRadius: '5px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.secondary,
    padding: '10px',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.secondary,
  },
}));
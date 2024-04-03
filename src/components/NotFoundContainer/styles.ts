import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: 'calc(100vw - 80px)',

  '& span': {
    fontSize: '1rem',
    margin: '0.5rem',
    color: theme.palette.text.secondary,
    opacity: 0.7,
  },
  '& b': {
    color: theme.palette.text.secondary,
  },
}));
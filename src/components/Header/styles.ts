import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar, alpha } from '@mui/material';

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.78),
  opacity: 0.98,
  backdropFilter: 'blur(8px)',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  padding: '1rem',
  height: '64px',
  position: 'absolute',
  top: 0,
  zIndex: 1000,
}));
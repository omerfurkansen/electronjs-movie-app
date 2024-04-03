import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const LoaderStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
};

const BackdropStyle: React.CSSProperties = {
  color: '#fff',
  opacity: .5,
};

// Common circular loader component
export default function CircularLoader({ style }: { readonly style?: React.CSSProperties }) {
  return (
    <Backdrop open style={BackdropStyle}>
      <CircularProgress color="inherit" style={{ ...LoaderStyle, ...style }} />
    </Backdrop>
  );
}

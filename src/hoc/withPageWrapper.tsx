import React from 'react';
import { Box, styled } from '@mui/material';

const StyledPageWrapper = styled(Box)(({ theme }) => ({
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 100%)`,
  height: 'calc(100vh - 144px)',
  padding: '104px 40px 40px 40px',
  overflowY: 'auto',
  scrollbarColor: `${theme.palette.secondary.light} transparent`,
  scrollbarWidth: 'thin',
  position: 'relative',
}));

function withPageWrapper<P>(WrappedComponent: React.ComponentType<P>) {
  return (props: P & { readonly children?: React.ReactNode }) => (
    <StyledPageWrapper>
      <WrappedComponent {...props}  />
    </StyledPageWrapper>
  );
}

export default withPageWrapper;
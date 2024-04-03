import React from "react";
import { Fade, Box } from "@mui/material";
import { useAppSelector } from "../hooks/redux";
import { selectAppLoading } from "../features/movies/movieSlice";

const withFade = <P extends object>( WrappedComponent: React.ComponentType<P>) => {
  return (props: P & { readonly children?: React.ReactNode }) => {
    const isLoading = useAppSelector(selectAppLoading);

    return (
      <Fade in={!isLoading} timeout={1000}>
        <Box>
          <WrappedComponent {...props}  />
        </Box>
      </Fade>
    );
  }
}

export default withFade;

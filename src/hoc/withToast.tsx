import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useAppSelector } from '../hooks/redux';
import { selectAppError } from '../features/movies/movieSlice';

const withToast = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & { readonly children?: React.ReactNode }) => {
    const error = useAppSelector(selectAppError);
  
    useEffect(() => {
      if (error) {
        toast.error(error);
      }
    }, [error]);
  
    return (
      <React.Fragment>
        <WrappedComponent {...props} />
        <ToastContainer 
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </React.Fragment>
    );
  };
}

export default withToast;
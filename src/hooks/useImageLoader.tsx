import React from 'react';

const useImageLoader = (url: string) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!url) return;

    const image = new Image();
    image.src = url;
    
    // On error try again
    // This is a workaround for ERR_QUIC_PROTOCOL_ERROR in Chrome
    image.onerror = () => {
      console.log('Error loading image, retrying...');
      image.src = url
    };

    // On load set loading to false
    image.onload = () => {
      // setTimeout(() => {
        setLoading(false);
      // }, 5000);
    };
  }, [url]);

  return loading;
};

export default useImageLoader;

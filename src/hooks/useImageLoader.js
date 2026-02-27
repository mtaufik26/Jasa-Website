import { useState, useEffect, useRef, useCallback } from "react";

export const useImageLoader = (imageUrls) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [errorImages, setErrorImages] = useState({});
  const mountedRef = useRef(true);
  const processingRef = useRef({});

  const markAsLoaded = useCallback((index) => {
    if (mountedRef.current) {
      setLoadedImages(prev => ({ ...prev, [index]: true }));
    }
  }, []);

  const markAsError = useCallback((index) => {
    if (mountedRef.current) {
      setErrorImages(prev => ({ ...prev, [index]: true }));
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    
    processingRef.current = {};

    if (!imageUrls || imageUrls.length === 0) return;

    const imageObjects = [];

    imageUrls.forEach((url, index) => {
      if (!url) {
        markAsError(index);
        return;
      }

      processingRef.current[index] = true;

      const img = new Image();
      img.src = url;
      
      img.onload = () => {
        markAsLoaded(index);
        delete processingRef.current[index];
      };
      
      img.onerror = () => {
        markAsError(index);
        delete processingRef.current[index];
      };
      
      imageObjects.push(img);
    });

    return () => {
      mountedRef.current = false;
      imageObjects.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls, markAsLoaded, markAsError]); 

  const isLoaded = useCallback((index) => loadedImages[index] || false, [loadedImages]);
  const hasError = useCallback((index) => errorImages[index] || false, [errorImages]);
  const isLoading = useCallback((index) => {
    return Boolean(
      imageUrls && 
      imageUrls[index] && 
      !loadedImages[index] && 
      !errorImages[index]
    );
  }, [imageUrls, loadedImages, errorImages]);

  return { isLoaded, hasError, isLoading };
};
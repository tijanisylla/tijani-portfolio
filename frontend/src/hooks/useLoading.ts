import { useState, useCallback } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);
  
  const withLoading = useCallback(async <T,>(asyncFn: () => Promise<T>): Promise<T> => {
    try {
      setIsLoading(true);
      return await asyncFn();
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  };
};

import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

function useFetchJson<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (!didCancel) {
          setData(result);
        }
      } catch (error) {
        if (!didCancel) {
          setError(error instanceof Error ? error.message : "Unknown error");
        }
      } finally {
        if (!didCancel) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetchJson;

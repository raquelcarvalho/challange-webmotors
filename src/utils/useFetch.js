import { useState, useEffect } from "react";
const useFetch = (shouldFetch, url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const path = "http://desafioonline.webmotors.com.br/api/OnlineChallenge";

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(path + url);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    if (shouldFetch) {
      doFetch();
    }

    return () => {
      abortController.abort();
    };
  }, [shouldFetch, url]);

  return { response, error, loading };
};
export default useFetch;

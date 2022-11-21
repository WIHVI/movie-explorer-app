import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (res.ok) return res.json();
        throw Error("could not fetch the data for that resource");
      })
      .then((data) => setMovies(data))
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.log(err.message);
      });

    return () => abortCont.abort();
  }, [url]);

  return { movies };
};

export default useFetch;

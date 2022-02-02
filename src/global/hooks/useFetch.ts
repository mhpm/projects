import { useEffect, useRef, useState } from "react";

export const useFetch = (url: string, _options: object) => {
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //use useRef to wrap an object/array argument
  //witch is a useEffect dependency
  const options = useRef(_options).current;

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) throw Error(res.statusText);

        const json = await res.json();

        setData(json);
        setIsPending(false);
        setError("");
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fect data");
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, options]);

  return { data, isPending, error };
};

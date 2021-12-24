import { useState } from "react";
function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchRequest = () => {
    setLoading(true);
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return { loading, isError, data, fetchRequest };
}
export default useFetch;

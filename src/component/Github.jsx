import useFetch from "../hook/useFetch";
import { useEffect, useState } from "react";

const Github = () => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("https://api.github.com/search/users?q=masai");

  const { loading, isError, data, fetchRequest } = useFetch(
    url + `&page=${page}`
  );
  useEffect(() => {
    fetchRequest();
  }, [url, page]);
  return (
    <>
      {!loading &&
        data?.items?.map((item) => <div key={item.id}>{item.login}</div>)}
      <div>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
};
export default Github;

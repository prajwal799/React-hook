import useFetch from "../hook/useFetch";
import { useEffect, useState } from "react"
import Textfield from "@mui/material/TextField"
import Button from "@mui/material/Button";
const Github = () => {
  const [page, setPage] = useState(1);
  const [query , setQuery] = useState("");
  const [url, setUrl] = useState(`https://api.github.com/search/users?`);

  const { loading, isError, data, fetchRequest } = useFetch(
    url + `q=${query}` +  `&page=${page}`
  );

  useEffect(() => {
    fetchRequest();
  }, [url, page]);
  return (
    <>
     <Textfield  placeholder="search" size="small"  value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button onClick={fetchRequest} variant="contained" >Search</Button> 
      <div>
        <Button onClick={() => setPage((prev) => prev + 1)} variant="contained">Next</Button>
      </div>
      {!loading &&
        data?.items?.map((item) => <div key={item.id}>{item.login}</div>)}
    </>
  );
};
export default Github;

import React from "react";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
function PostPaginator() {
  const [page, setPage] = useState(1);
  const fetchApi = async (context) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${context.queryKey[1]}`
    );
    return response.data;
  };
  // Gọi thuộc tính (các trường họp sử dụng) liên quan đến data
  const { isError, isLoading, data, isPreviousData } = useQuery(
    // state cần gán giá trị cho data
    ["posts", page],
    // giá trị lấy về
    fetchApi,
    // thuộc tính của reactQuerry
    { keepPreviousData: true }
  );
  if (isLoading) {
    return <h1>... Loading</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <h1>Current Page {page}</h1>
      <br></br>
      <button
        disabled={page === 0}
        onClick={() => {
          setPage((prev) => prev - 1);
        }}>
        Load Previous
      </button>
      <button
        disabled={page === 100 || isPreviousData}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}>
        Load Next
      </button>
    </div>
  );
}
export default PostPaginator;

import React from "react";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
function Posts() {
  const [page, setPage] = useState(1);
  const fetchApi = async ({ pageParam = 1 }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${pageParam}`
    );
    return response.data;
  };
  // Gọi thuộc tính (các trường họp sử dụng) liên quan đến data
  const {
    isError,
    isLoading,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
    hasPreviousPage,
  } = useInfiniteQuery(
    // state cần gán giá trị cho data
    [page],
    // giá trị lấy về
    fetchApi,
    // thuộc tính của reactQuerry
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < 100) {
          return pages.length + 1;
        }
        return undefined;
      },
      getLastPageParam: (lastPage, pages) => {
        if (pages.length < 100) {
          return pages.length - 1;
        }
        return undefined;
      },
    }
  );
  if (isLoading) {
    return <h1>... Loading</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      {data?.pages.map((page) => {
        return (
          <h1 key={page.id}>
            {page.id} - {page.title}
          </h1>
        );
      })}
      <button
        disabled={isFetchingNextPage || !hasNextPage}
        onClick={() => {
          fetchNextPage();
        }}>
        {" "}
        Load +
      </button>
      <button
        disabled={isFetchingPreviousPage || !hasPreviousPage}
        onClick={() => {
          fetchPreviousPage();
        }}>
        {" "}
        Load -
      </button>
    </div>
  );
}
export default Posts;

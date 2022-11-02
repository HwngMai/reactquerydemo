import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Posts() {
  const [posts, setPosts] = useState([]);
  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  };
  console.log("posts: ", posts);
  const { isError, isLoading, data } = useQuery(["posts"], fetchApi, {
    retry: 1,
  });
  if (isLoading) {
    return <h1>... Loading</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      {data?.map((post) => {
        return <h1 key={post.id}> {post.title}</h1>;
      })}
    </div>
  );
}

export default Posts;

import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useCreatePost } from "../Hooks/PostHook/useCreatePosts";
import { usePosts } from "../Hooks/PostHook/usePosts";
function GetQueryClient() {
  const queryClient = useQueryClient();
  // khởi tạo state
  const [isCreate, setIsCreate] = useState(false);
  const [dataPost, setDataPost] = useState({ title: "" });
  // gọi data post = customHook
  const queryPosts = usePosts(1000);
  // gọi func tạo post = customHook
  const queryCreatePost = useCreatePost(dataPost);
  const handleCreatePost = () => {
    setIsCreate(true);
    queryCreatePost.mutate(dataPost, {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    });
  };

  if (queryPosts.isLoading) {
    return <h1>... Loading</h1>;
  }
  if (queryPosts.isError) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      {queryPosts.data?.data.map((post) => {
        return (
          <h1 key={post.id}>
            {post.id} - {post.title}
          </h1>
        );
      })}
      <input
        onChange={(e) => {
          setDataPost((prevState) => ({
            ...prevState,
            title: `${e.target.value}`,
          }));
          console.log(dataPost);
        }}
        title='Add a title here'></input>
      <button onClick={handleCreatePost}> Create Post</button>
    </div>
  );
}

export default GetQueryClient;

import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useCreatePost } from "../Hooks/PostHook/useCreatePosts";
import { usePosts } from "../Hooks/PostHook/usePosts";
function GetQueryClient() {
  const queryClient = useQueryClient();
  // khởi tạo state

  const [dataPost, setDataPost] = useState({ title: "" });
  // gọi data post = customHook
  const queryPosts = usePosts(1000);
  // gọi func tạo post = customHook
  const queryCreatePost = useCreatePost(dataPost);
  // tạo func handleCreatePost
  const handleCreatePost = () => {
    // set state khởi tạo = true để gọi loading screen

    // đưa dữ liệu vào customHook gọi trước đó - l.14
    queryCreatePost.mutate(dataPost, {
      // thông báo lại cho client có dữ liệu mới ở ["posts"]
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
      // khi có dữ liệu mới queryPost sẽ gọi lại và render lại
    });
  };
  // nếu query đang loading render trạng thái loading
  if (queryPosts.isLoading) {
    return <h1>... Loading</h1>;
  }
  // nếu query bị lỗi render trạng thái lỗi
  if (queryPosts.isError) {
    return <h1>Error!</h1>;
  }
  return (
    // Nếu có dữ liệu
    <div>
      {queryPosts.data?.data.map((post) => {
        return (
          <h1 key={post.id}>
            {post.id} - {post.title}
          </h1>
        );
      })}
      <input
      // lấy data của input khi onchange
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

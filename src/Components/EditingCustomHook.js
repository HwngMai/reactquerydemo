import React from "react";
import { useState, useEffect } from "react";
import { useCreatePost } from "../Hooks/useCreatePosts";
import { usePosts } from "../Hooks/usePosts";
function EditingCustomHook() {
  const [isCreate, setIsCreate] = useState(false);
  const queryPosts = usePosts(1000);
  const queryCreatePost = useCreatePost(isCreate);
  const handleCreatePost = () => {
    setIsCreate(true);
  };
  //re-render bằng useEffect
  useEffect(() => {
    // Nếu isCreate = true và hoặc queryCreate tạo xong hoặc gọi query ko bị lỗi

    queryPosts.refetch();
    console.log("queryPosts: ", queryPosts);
    setIsCreate(false);
  }, [isCreate]);
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
      <button onClick={handleCreatePost}> Create Post</button>
    </div>
  );
}

export default EditingCustomHook;

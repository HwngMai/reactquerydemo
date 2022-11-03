import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function Editing() {
  const [isCreate, setIsCreate] = useState(false);
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    return response.data;
  };
  const fetchCreateApi = async () => {
    const response = await axios.post("http://localhost:3001/posts", {
      title: "new title",
      author: "typicode5",
    });
    return response.data;
  };
  // query gọi data
  const query = useQuery(["post"], fetchApi, { staleTime: 1000 });
  // query tạo data
  const queryCreate = useQuery(["create-post"], fetchCreateApi, {
    enabled: isCreate,
  });
  const handleCreatePost = () => {
    setIsCreate(true);
  };
  useEffect(() => {
    // Nếu isCreate = true và hoặc queryCreate tạo xong hoặc gọi query ko bị lỗi
    if (isCreate && (queryCreate.isSuccess || query.isError)) {
      query.refetch();
      setIsCreate(false);
    }
  }, [isCreate]);
  if (query.isLoading) {
    return <h1>... Loading</h1>;
  }
  if (query.isError) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      {query.data?.map((post) => {
        return (
          <h1 key={post.id}>
            {post.id} - {post.title}
          </h1>
        );
      })}
      <button
        disabled={isCreate && (queryCreate.isSuccess || query.isError)}
        onClick={handleCreatePost}>
        {" "}
        Create post
      </button>
    </div>
  );
}

export default Editing;

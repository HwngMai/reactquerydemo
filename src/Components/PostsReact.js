import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function PostsReact() {
  const [posts, setPosts] = useState([]);
  const fetchApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  if (!posts.length) {
    return <h1> ... Loading </h1>;
  } else {
    return (
      <div>
        <p>PostsReact</p>
        {posts?.map((post) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })}
      </div>
    );
  }
}

export default PostsReact;

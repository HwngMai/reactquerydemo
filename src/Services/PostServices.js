import { https } from "./ConfigURL";
export const PostServices = {
  getPosts: () => {
    let uri = "/posts";
    return https.get(uri);
  },
  createPost: () => {
    let uri = "/posts";
    return https.post(uri, {
      title: "new title",
      author: "typicode5",
    });
  },
};

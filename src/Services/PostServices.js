import { https } from "./ConfigURL";
export const PostServices = {
  getPosts: () => {
    let uri = "/posts";
    return https.get(uri);
  },
  createPost: (data) => {
    let uri = "/posts";
    return https.post(uri, data);
  },
};

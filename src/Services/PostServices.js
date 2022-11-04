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
  deletePost: (dataId) => {
    let uri = "/posts";
    return https.delete(uri, {
      params: {
        id: dataId,
      },
    });
  },
  deletePost2: (dataId) => {
    let uri = `/posts/${dataId}`;
    return https.delete(uri);
  },
};

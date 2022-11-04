import { useMutation } from "@tanstack/react-query";
import { PostServices } from "../../Services/PostServices";
export function useCreatePost(data) {
  return useMutation(() => {
    return PostServices.createPost(data);
  });
}

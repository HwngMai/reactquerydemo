import { useQuery } from "@tanstack/react-query";
import { PostServices } from "../Services/PostServices";
export function useCreatePost(enabled) {
  return useQuery(["create-post"], () => PostServices.createPost(), {
    enabled: enabled,
  });
}

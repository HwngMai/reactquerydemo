import { useQuery } from "@tanstack/react-query";
import { PostServices } from "../Services/PostServices";
export function usePosts(staleTime) {
  return useQuery(["posts"], () => PostServices.getPosts(), {
    staleTime: staleTime,
  });
}

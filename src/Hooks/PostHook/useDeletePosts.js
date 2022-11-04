import { useMutation } from "@tanstack/react-query";
import { PostServices } from "../../Services/PostServices";
export function useDeletePost(dataId) {
  return useMutation(() => {
    return PostServices.deletePost2(dataId);
  });
}

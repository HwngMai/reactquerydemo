import { useMutation } from "@tanstack/react-query";
import { PostServices } from "../../Services/PostServices";
export function useEditPost(dataID, data) {
  return useMutation(() => {
    return PostServices.editPost(dataID, data);
  });
}

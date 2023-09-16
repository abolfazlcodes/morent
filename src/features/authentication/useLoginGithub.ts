import { useMutation } from "@tanstack/react-query";
import { loginWithGithub as loginWithGithubApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLoginGithub() {
  const { isLoading, mutate: loginWithGithub } = useMutation({
    mutationFn: loginWithGithubApi,

    onSuccess: () => {
      // toast notification
      toast.success(`Login successful. Welcome back `);
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong! Please try again");
    },
  });

  return { isLoading, loginWithGithub };
}

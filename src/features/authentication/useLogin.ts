import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { LoginFormProps } from "../../interfaces/auth.interface";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // import the react query
  const { isLoading, mutate: login } = useMutation({
    mutationFn: (data: LoginFormProps) => loginApi(data),

    onSuccess: (user) => {
      // toast notification
      toast.success(`Login successful. Welcome back ${user.user.email}`);

      // re-invalidating the user
      queryClient.setQueryData(["user"], user.user);

      // redirect user to the home page
      navigate("/", { replace: true });
    },

    onError: (error) => {
      console.log(error);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { isLoading, login };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";
import { SignupFormProps } from "../../interfaces/auth.interface";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate: signup } = useMutation({
    mutationFn: (data: SignupFormProps) => signupApi(data),

    onSuccess: (user) => {
      toast.success(`Welcome aboard ${user.user?.user_metadata?.fullName}`);

      queryClient.setQueryData(["user"], user.user);

      //   redirecting user to homepage
      navigate("/", { replace: true });
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong. Please try again");
    },
  });

  return { isLoading, signup };
}

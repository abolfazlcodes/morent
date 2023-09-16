import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
// import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { LoginFormProps } from "../../interfaces/auth.interface";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

import Heading from "../../ui/Heading";
import LoginActionsWrapper from "../../ui/LoginActionsWrapper";

function LoginForm() {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
    setFocus,
  } = useForm<LoginFormProps>();
  const { isLoading, login } = useLogin();

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    login(data);
    reset();
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label='Email address' error={errors.email?.message}>
        <Input
          type='email'
          id='email'
          autoComplete='username'
          placeholder='john@doe.com'
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message:
                "Incorrect email format. Please enter a valid email address",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label='Password' error={errors.password?.message}>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          placeholder='Your password'
          {...register("password", {
            required: "Please enter your password",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <Heading as='h6' color='grey'>
        Login with
      </Heading>
      <LoginActionsWrapper />

      <FormRowVertical>
        <Button size='large' variation='primary' disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

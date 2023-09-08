import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
// import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

type LoginFormTypes = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
    setFocus,
  } = useForm<LoginFormTypes>();

  const onSubmit: SubmitHandler<LoginFormTypes> = (data) => {
    console.log(data);

    // resetting the form
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
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message:
                "Incorrect email format. Please enter a valid email address",
            },
          })}
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
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large' variation='primary'>
          Login
          {/* {!isLoading ? "Login" : <SpinnerMini />} */}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

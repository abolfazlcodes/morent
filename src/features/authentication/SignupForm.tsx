import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { SignupFormProps } from "../../interfaces/auth.interface";
import { useSignup } from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
    setFocus,
    getValues,
  } = useForm<SignupFormProps>();
  const { isLoading, signup } = useSignup();

  const onSubmit: SubmitHandler<SignupFormProps> = (data) => {
    signup(data);

    // resetting the form
    reset();
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <Form type='regular' onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label='First name' error={errors.firstName?.message}>
        <Input
          type='text'
          id='firstName'
          autoComplete='firstName'
          placeholder='John'
          {...register("firstName", {
            required: "Please enter your first name",
            minLength: {
              value: 2,
              message: "It should at least contain two characters",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label='Last name' error={errors.lastName?.message}>
        <Input
          type='text'
          id='lastName'
          autoComplete='lastName'
          placeholder='Doe'
          {...register("lastName", {
            required: "Please enter your last name",
            minLength: {
              value: 2,
              message: "It should at least contain two characters",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label='Email address' error={errors.email?.message}>
        <Input
          type='email'
          id='email'
          placeholder='john@doe.com'
          {...register("email", {
            required: "Please provide your email address",
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
          placeholder='Enter your password'
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 8,
              message: "password must be at least 8 characters",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
              message: "Password must contain an uppercase letter and a number",
            },
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical
        label='Confirm password'
        error={errors.confirmPassword?.message}
      >
        <Input
          type='password'
          id='confirmpassword'
          placeholder='Repeat your password'
          {...register("confirmPassword", {
            required: "Please repeat your password",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size='large' variation='primary' disabled={isLoading}>
          {!isLoading ? "Create new account" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignupForm;

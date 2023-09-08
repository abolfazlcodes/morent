import { LoginFormProps, SignupFormProps } from "../interfaces/auth.interface";
import supabase from "./supabase";

export async function signup({
  firstName,
  lastName,
  email,
  password,
}: SignupFormProps) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }: LoginFormProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

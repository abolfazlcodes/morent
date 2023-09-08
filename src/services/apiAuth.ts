import { LoginFormProps } from "../interfaces/auth.interface";
import supabase from "./supabase";

export async function login({ email, password }: LoginFormProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

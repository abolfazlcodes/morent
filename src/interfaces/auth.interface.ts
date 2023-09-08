export interface LoginFormProps {
  email: string;
  password: string;
}

export interface SignupFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

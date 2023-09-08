import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
// import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

function LoginForm() {
  return (
    <Form type='regular'>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          //   disabled={isLoading}
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          //   disabled={isLoading}
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
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

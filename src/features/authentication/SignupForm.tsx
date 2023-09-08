import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";

function SignupForm() {
  return (
    <Form type='regular'>
      <FormRowVertical label='First name'>
        <Input type='text' id='firstname' />
      </FormRowVertical>

      <FormRowVertical label='Last name'>
        <Input type='text' id='lastname' />
      </FormRowVertical>

      <FormRowVertical label='Email address'>
        <Input type='email' id='email' />
      </FormRowVertical>

      <FormRowVertical label='Password'>
        <Input type='password' id='password' autoComplete='current-password' />
      </FormRowVertical>

      <FormRowVertical label='Confirm password'>
        <Input type='password' id='confirmpassword' />
      </FormRowVertical>

      <FormRowVertical>
        <Button size='large' variation='primary'>
          Create new account
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default SignupForm;

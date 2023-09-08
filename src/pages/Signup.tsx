import { styled } from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LinkButton from "../ui/LinkButton";
import SignupForm from "../features/authentication/SignupForm";

const SignUpLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  border: 1px solid black;
`;

const WrapperCenter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Signup() {
  return (
    <SignUpLayout>
      <WrapperCenter>
        <Logo />
        <Heading as='h4' color='black'>
          Sign up and rent your dream car
        </Heading>
      </WrapperCenter>

      <SignupForm />

      <WrapperCenter>
        <LinkButton to='/login'>Already have an account? Log in</LinkButton>
      </WrapperCenter>
    </SignUpLayout>
  );
}

export default Signup;

import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LinkButton from "../ui/LinkButton";

const LoginLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const WrapperCenter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Login() {
  return (
    <LoginLayout>
      <WrapperCenter>
        <Logo />
        <Heading as='h4' color='black'>
          Welcome back! Log in to your account
        </Heading>
      </WrapperCenter>
      <LoginForm />

      <WrapperCenter>
        <LinkButton to='/signup'>New to Morent? Create your account</LinkButton>
      </WrapperCenter>
    </LoginLayout>
  );
}

export default Login;

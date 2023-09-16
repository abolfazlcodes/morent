import { AiOutlineGithub } from "react-icons/ai";
import LoginAction from "./LoginAction";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function LoginActionsWrapper() {
  return (
    <Wrapper>
      {/* <LoginAction color='#54A6FF' disabled={true}>
        <AiOutlineTwitter />
      </LoginAction> */}
      <LoginAction color='#1A202C'>
        <AiOutlineGithub />
      </LoginAction>
      {/* <LoginAction color='#3563E9'>
        <AiFillLinkedin />
      </LoginAction> */}
    </Wrapper>
  );
}

export default LoginActionsWrapper;

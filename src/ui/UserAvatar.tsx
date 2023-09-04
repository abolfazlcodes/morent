import { styled } from "styled-components";
import img from "../assets/me.jpg";

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`;

function UserAvatar() {
  return (
    <Wrapper>
      <StyledAvatar src={img} />
    </Wrapper>
  );
}

export default UserAvatar;

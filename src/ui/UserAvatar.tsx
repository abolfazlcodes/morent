import { styled } from "styled-components";
import img from "../assets/me.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  cursor: pointer;

  @media screen and (max-width: 730px) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledAvatar = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
`;

function UserAvatar() {
  return (
    <Wrapper>
      <Link to='/account'>
        <StyledAvatar
          src={img}
          effect='blur'
          alt='user image'
          placeholder={<HiUser />}
        />
      </Link>
    </Wrapper>
  );
}

export default UserAvatar;

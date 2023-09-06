import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogoTitle = styled.h1`
  color: var(--color-blue-800);
  text-transform: uppercase;
  font-size: 3.2rem;
  letter-spacing: 0.2rem;

  @media screen and (max-width: 730px) {
    font-size: 2.4rem;
  }
`;

function Logo() {
  return (
    <Link to='/'>
      <StyledLogoTitle>MORENT</StyledLogoTitle>
    </Link>
  );
}

export default Logo;

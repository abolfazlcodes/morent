import { styled } from "styled-components";

import { HiHeart, HiCog6Tooth, HiBell } from "react-icons/hi2";
import Logo from "./Logo";
import NavInput from "./NavInput";
import Row from "./Row";
import NavAction from "./NavAction";
import UserAvatar from "./UserAvatar";

const StyledNavbar = styled.nav`
  background-color: var(--color-white);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 2rem 5rem;
  align-items: center;
  column-gap: 2rem;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavInput />

      <Row>
        <NavAction link='/'>
          <HiHeart />
        </NavAction>
        <NavAction link='/'>
          <HiBell />
        </NavAction>
        <NavAction link='/'>
          <HiCog6Tooth />
        </NavAction>

        <UserAvatar />
      </Row>
    </StyledNavbar>
  );
}

export default Navbar;

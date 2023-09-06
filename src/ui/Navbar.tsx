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

  @media screen and (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 2rem 1rem;
    row-gap: 2rem;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <NavInput />

      <Row>
        <NavAction link='/bookmarks'>
          <HiHeart />
        </NavAction>
        <NavAction link='/notifications'>
          <HiBell />
        </NavAction>
        <NavAction link='/settings'>
          <HiCog6Tooth />
        </NavAction>

        <UserAvatar />
      </Row>
    </StyledNavbar>
  );
}

export default Navbar;

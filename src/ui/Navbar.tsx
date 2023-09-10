import { styled } from "styled-components";

import { HiHeart, HiCog6Tooth } from "react-icons/hi2";
import Logo from "./Logo";
import NavInput from "./NavInput";
import Row from "./Row";
import NavAction from "./NavAction";
import UserAvatar from "./UserAvatar";
import { useBookmarks } from "../context/Bookmarks";
import { BookmarksContextType } from "../interfaces/contexts.interface";

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
  const { bookmarks } = useBookmarks() as BookmarksContextType;

  return (
    <StyledNavbar>
      <Logo />
      <NavInput />

      <Row type='verticalEnd'>
        <NavAction link='/bookmarks' badge totalBookmarks={bookmarks.length}>
          <HiHeart />
        </NavAction>
        {/* <NavAction link='/notifications'>
          <HiBell />
        </NavAction> */}
        <NavAction link='/settings'>
          <HiCog6Tooth />
        </NavAction>

        <UserAvatar />
      </Row>
    </StyledNavbar>
  );
}

export default Navbar;

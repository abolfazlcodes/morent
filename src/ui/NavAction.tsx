import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavAction = styled.span`
  border: 1px solid var(--color-border);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: var(--color-grey-500);

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)`
  position: relative;
`;

const StyledBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--color-red-800);
  color: var(--color-white);
  border-radius: 100%;

  position: absolute;
  top: -20%;
  right: 0;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

interface NavActionProps {
  children: ReactNode;
  link: string;
  badge?: boolean;
  totalBookmarks?: number;
}

function NavAction({ children, link, badge, totalBookmarks }: NavActionProps) {
  return (
    <StyledNavLink to={link}>
      <StyledNavAction>{children}</StyledNavAction>
      {badge && <StyledBadge>{totalBookmarks}</StyledBadge>}
    </StyledNavLink>
  );
}

export default NavAction;

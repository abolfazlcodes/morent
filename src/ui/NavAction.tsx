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

  @media screen and (max-width: 730px) {
    display: none;
  }
`;

interface NavActionProps {
  children: ReactNode;
  link: string;
}

function NavAction({ children, link }: NavActionProps) {
  return (
    <Link to={link}>
      <StyledNavAction>{children}</StyledNavAction>
    </Link>
  );
}

export default NavAction;

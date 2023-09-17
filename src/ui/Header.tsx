import React from "react";
import { styled } from "styled-components";
import Heading from "./Heading";
import LinkButton from "./LinkButton";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem 2em;
  margin-top: 2rem;

  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;

interface HeaderProps {
  children?: React.ReactNode;
  link?: string;
  title?: string;
  titleType?: string;
  titleColor?: string;
}

function Header({ title, link, children, titleColor, titleType }: HeaderProps) {
  // now the component can be used in 2 different ways: 1. component composition and 2. component with props

  if (children) return <StyledHeader>{children}</StyledHeader>;

  return (
    <StyledHeader>
      <Heading as={titleType} color={titleColor}>
        {title}
      </Heading>
      <LinkButton to={link!}>view all</LinkButton>
    </StyledHeader>
  );
}

export default Header;

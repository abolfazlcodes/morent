import styled from "styled-components";
import Heading from "./Heading";
import { ReactNode } from "react";

const StyledCardHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const StyledCardCategory = styled.span`
  color: #90a3bf;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
`;

interface CardHeaderProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

function CardHeader({ title, subtitle, children }: CardHeaderProps) {
  return (
    <StyledCardHeader>
      <div>
        <Heading as='h3' color='black'>
          {title}
        </Heading>
        <StyledCardCategory>{subtitle}</StyledCardCategory>
      </div>

      {children}
      {/* <BookmarkHeart carData={carData} /> */}
    </StyledCardHeader>
  );
}

export default CardHeader;

import { ReactNode } from "react";
import { styled } from "styled-components";

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

interface RowProps {
  children: ReactNode;
}

function Row({ children }: RowProps) {
  return <StyledRow>{children}</StyledRow>;
}

export default Row;

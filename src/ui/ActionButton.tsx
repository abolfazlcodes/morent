import styled from "styled-components";

const StyledBtn = styled.button`
  color: #3563e9;
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
  background: none;
  border: none;
`;

function ActionButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
}

export default ActionButton;

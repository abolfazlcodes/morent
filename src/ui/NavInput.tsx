import { styled } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

const StyledWrapper = styled.div`
  justify-self: center;
  width: 70%;
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  margin-left: auto;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 0.5rem 3rem;
  color: var(--color-grey-500);

  &::placeholder {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    color: var(--color-grey-500);
  }
`;

const StyledSearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-40%, -40%);
  font-size: 2rem;
  color: var(--color-grey-500);
`;

function NavInput() {
  return (
    <StyledWrapper>
      <StyledSearchIcon>
        <HiMagnifyingGlass />
      </StyledSearchIcon>
      <StyledInput type='text' placeholder='Search car names...' />
    </StyledWrapper>
  );
}

export default NavInput;

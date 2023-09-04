import { styled } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

const StyledWrapper = styled.div`
  justify-self: center;
  width: 70%;
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 975px) {
    width: 100%;
  }

  @media screen and (max-width: 730px) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  margin-left: auto;
  padding: 0.5rem;
  color: var(--color-grey-500);
  border: none;
  outline: var(--color-border);

  &::placeholder {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    color: var(--color-grey-500);
  }
`;

const StyledSearchIcon = styled.span`
  width: 10%;
  font-size: 2rem;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
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

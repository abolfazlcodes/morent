import { styled } from "styled-components";
import { HiAdjustmentsHorizontal, HiMagnifyingGlass } from "react-icons/hi2";
import { useSidebarOpen } from "../context/SideBarOpen";
import { SidebarOpenContextType } from "../interfaces/contexts.interface";

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
  border-right: 1px solid var(--color-grey-500);
`;

const StyledFilterIcon = styled.span`
  display: none;

  @media screen and (max-width: 550px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    font-size: 2rem;
    color: var(--color-grey-500);
    cursor: pointer;
    border-left: 1px solid var(--color-grey-500);
  }
`;

function NavInput() {
  const { isOpen, setIsOpen } = useSidebarOpen() as SidebarOpenContextType;

  return (
    <StyledWrapper>
      <StyledSearchIcon>
        <HiMagnifyingGlass />
      </StyledSearchIcon>

      <StyledInput type='text' placeholder='Search car names...' />

      <StyledFilterIcon onClick={() => setIsOpen(!isOpen)}>
        <HiAdjustmentsHorizontal />
      </StyledFilterIcon>
    </StyledWrapper>
  );
}

export default NavInput;

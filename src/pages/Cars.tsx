import styled, { css } from "styled-components";
import Operations from "../ui/Operations";
import CarsWrapper from "../features/cars/CarsWrapper";
import { useSidebarOpen } from "../context/SidebarOpen";
import { SidebarOpenContextType } from "../interfaces/contexts.interface";

interface OverlayProps {
  isOpen: boolean;
}

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 1rem;
  height: 100dvh;
  position: relative;

  @media screen and (max-width: 990px) {
    grid-template-columns: 20rem 1fr;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
  }
`;

const StyledFiltersOverlay = styled.div<OverlayProps>`
  display: none;

  @media screen and (max-width: 550px) {
    ${(props) =>
      props.isOpen &&
      css`
        display: block;
      `}

    position: absolute;
    background-color: #00000028;
    width: 100%;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 10;
  }
`;

function Cars() {
  const { isOpen } = useSidebarOpen() as SidebarOpenContextType;

  return (
    <>
      <StyledWrapper>
        <StyledFiltersOverlay isOpen={isOpen} />

        <Operations isOpen={isOpen} />

        <CarsWrapper />
      </StyledWrapper>
    </>
  );
}

export default Cars;

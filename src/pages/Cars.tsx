import styled from "styled-components";
import Operations from "../ui/Operations";
import CarsWrapper from "../features/cars/CarsWrapper";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 1rem;
`;

function Cars() {
  return (
    <>
      <StyledWrapper>
        <Operations />

        <CarsWrapper />
      </StyledWrapper>
    </>
  );
}

export default Cars;

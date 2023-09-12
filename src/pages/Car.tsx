import styled from "styled-components";
import CarDetails from "../features/cars/CarDetails";

const StyledWrapper = styled.div`
  padding: 1rem;
  max-width: 80%;
  margin: auto;

  @media screen and (max-width: 1300px) {
    max-width: 95%;
  }

  @media screen and (max-width: 550px) {
    max-width: 100%;
    padding: 0;
  }
`;

function SingleCar() {
  return (
    <>
      <StyledWrapper>
        <CarDetails />
      </StyledWrapper>
    </>
  );
}

export default SingleCar;

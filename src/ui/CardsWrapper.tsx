import { styled } from "styled-components";
import CarCard from "./CarCard";

const StyledWrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
`;

function CardsWrapper() {
  return (
    <StyledWrapper>
      <CarCard />
    </StyledWrapper>
  );
}

export default CardsWrapper;

import { styled } from "styled-components";
import CarCard from "./CarCard";

const StyledWrapper = styled.div`
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
      <CarCard type='typeB' />
    </StyledWrapper>
  );
}

export default CardsWrapper;

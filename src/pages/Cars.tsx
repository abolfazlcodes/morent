import styled from "styled-components";
import Filter from "../ui/Filter";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 1rem;
`;

function Cars() {
  return (
    <>
      <StyledWrapper>
        <Filter />
        <div>cars</div>
      </StyledWrapper>
    </>
  );
}

export default Cars;

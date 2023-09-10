import styled from "styled-components";
import Operations from "../ui/Operations";

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
        <div>cars</div>
      </StyledWrapper>
    </>
  );
}

export default Cars;

import styled from "styled-components";
import Heading from "./Heading";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StyledTotalReviews = styled.span`
  display: inline-flex;
  background-color: var(--color-blue-800);
  width: 4.4rem;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.5rem;
`;

function ReviewsHeader() {
  return (
    <StyledHeader>
      <Heading as='h4' color='black'>
        Reviews
      </Heading>
      <StyledTotalReviews>13</StyledTotalReviews>
    </StyledHeader>
  );
}

export default ReviewsHeader;

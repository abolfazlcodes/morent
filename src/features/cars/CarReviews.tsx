import styled from "styled-components";
import Review from "../../ui/Review";
import ReviewsFooter from "../../ui/ReviewsFooter";
import ReviewsHeader from "../../ui/ReviewsHeader";

const StyledSection = styled.section`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  width: 98%;
  margin: 2rem auto;
`;

function CarReviews() {
  return (
    <StyledSection>
      <ReviewsHeader />
      <Review />
      <Review />
      <ReviewsFooter />
    </StyledSection>
  );
}

export default CarReviews;

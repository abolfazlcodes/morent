import { useState } from "react";
import styled from "styled-components";
import Review from "../../ui/Review";
import ReviewsFooter from "../../ui/ReviewsFooter";
import ReviewsHeader from "../../ui/ReviewsHeader";
import { reviewsData } from "../../constants/reviews";
import { ReviewProps } from "../../interfaces/cars.interface";

const StyledSection = styled.section`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  width: 98%;
  margin: 2rem auto;
`;

function CarReviews() {
  const [showReviewNum, setShowReviewNum] = useState(2);

  const handleShowMoreReviews = (num: number) => {
    setShowReviewNum(num);
  };

  return (
    <StyledSection>
      <ReviewsHeader totalReviews={reviewsData.length} />
      {reviewsData.slice(0, showReviewNum).map((review: ReviewProps) => (
        <Review key={review.id} review={review} />
      ))}

      {reviewsData.length !== showReviewNum && (
        <ReviewsFooter onClick={handleShowMoreReviews} />
      )}
    </StyledSection>
  );
}

export default CarReviews;

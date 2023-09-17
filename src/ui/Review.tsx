import { LazyLoadImage } from "react-lazy-load-image-component";
import user1 from "../assets/user 1.png";
import user2 from "../assets/user 2.png";
import styled from "styled-components";
import { ReviewProps } from "../interfaces/cars.interface";
import { formatDateHandler } from "../utils/dateHelper";

const StyledArticle = styled.article`
  margin: 2rem 0;
`;

const StyledReviewHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledUserHeaderWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledUserName = styled.h5`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-black);
  text-transform: capitalize;

  @media screen and (max-width: 550px) {
    font-size: 1.6rem;
  }
`;

const StyledUserRole = styled.span`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: var(--color-grey-400);
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledDate = styled.time`
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const StyledReviewDescription = styled.p`
  color: #596780;
  font-size: 1.4rem;
  width: 94%;
  margin-left: auto;
  padding: 1.5rem 0;
  line-height: 2.8rem;

  @media screen and (max-width: 975px) {
    width: 88%;
  }

  @media screen and (max-width: 550px) {
    max-width: 82%;
    font-size: 1.2rem;
    color: var(--color-grey-400);
  }
`;

interface ReviewComponentProps {
  review: ReviewProps;
}

function Review({ review }: ReviewComponentProps) {
  const { id, comment, date, userName, userRole } = review;
  const userImage = id % 2 === 0 ? user2 : user1;

  return (
    <StyledArticle>
      <StyledReviewHeader>
        <StyledUserHeaderWrapper>
          <LazyLoadImage src={userImage} alt={userName} />
          <div>
            <StyledUserName>{userName}</StyledUserName>
            <StyledUserRole>{userRole}</StyledUserRole>
          </div>
        </StyledUserHeaderWrapper>
        <StyledDateWrapper>
          <StyledDate>{formatDateHandler(date)}</StyledDate>
          {/* TODO: developing a rating start component */}
          {/* <span>stars</span> */}
        </StyledDateWrapper>
      </StyledReviewHeader>
      <StyledReviewDescription>{comment}</StyledReviewDescription>
    </StyledArticle>
  );
}

export default Review;

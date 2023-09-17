import styled from "styled-components";
import ActionButton from "./ActionButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ReviewsFooterProps {
  onClick: (num: number) => void;
}

function ReviewsFooter({ onClick }: ReviewsFooterProps) {
  return (
    <Wrapper>
      <ActionButton onClick={() => onClick(5)}>Show more</ActionButton>
    </Wrapper>
  );
}

export default ReviewsFooter;

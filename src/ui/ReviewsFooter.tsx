import styled from "styled-components";
import ActionButton from "./ActionButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ReviewsFooter() {
  return (
    <Wrapper>
      <ActionButton>Show more</ActionButton>
    </Wrapper>
  );
}

export default ReviewsFooter;

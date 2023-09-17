import styled from "styled-components";
import Heading from "./Heading";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-grey-400);
`;

const TotalPrice = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);
`;

function PaymentCardSummary() {
  return (
    <Wrapper>
      <div>
        <Heading as='h2'>Total Rental Price</Heading>
        <Subtitle>Overall price and includes rental discount</Subtitle>
      </div>
      <TotalPrice>$80.00</TotalPrice>
    </Wrapper>
  );
}

export default PaymentCardSummary;

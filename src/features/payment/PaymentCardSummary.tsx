import styled from "styled-components";
import Heading from "../../ui/Heading";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Subtitle = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-400);

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const TotalPrice = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
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

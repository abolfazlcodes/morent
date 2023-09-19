import styled from "styled-components";
import Heading from "../../ui/Heading";
import { memo } from "react";

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

interface SummaryProps {
  totalPrice: number | undefined;
  discount?: number | undefined;
}

const PaymentCardSummary = memo(function ({
  totalPrice,
  discount,
}: SummaryProps) {
  return (
    <Wrapper>
      <div>
        <Heading as='h2'>Total Rental Price</Heading>
        <Subtitle>
          {discount
            ? `Overall price (${totalPrice}.00) and includes rental discount (${discount})`
            : `Overall price (${totalPrice}.00)`}
        </Subtitle>
      </div>
      <TotalPrice>
        ${discount && totalPrice ? totalPrice - discount : totalPrice}
      </TotalPrice>
    </Wrapper>
  );
});

export default PaymentCardSummary;

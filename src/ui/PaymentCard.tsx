import LineSeparator from "./LineSeparator";
import PaymentCardHeader from "./PaymentCardHeader";
import styled from "styled-components";
import PaymentCardRow from "./PaymentCardRow";
import DiscountBox from "./DiscountBox";
import PaymentCardSummary from "./PaymentCardSummary";

const Wrapper = styled.article`
  flex: 1;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

function PaymentCard() {
  return (
    <Wrapper>
      <PaymentCardHeader />

      <LineSeparator />

      <PaymentCardRow title='subtotal' price='80.00' />
      <PaymentCardRow title='Tax' price='0' />

      <DiscountBox />

      <PaymentCardSummary />
    </Wrapper>
  );
}

export default PaymentCard;

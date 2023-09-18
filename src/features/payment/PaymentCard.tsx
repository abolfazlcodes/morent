import PaymentCardHeader from "./PaymentCardHeader";
import styled from "styled-components";
import PaymentCardRow from "./PaymentCardRow";
import PaymentCardSummary from "./PaymentCardSummary";
import LineSeparator from "../../ui/LineSeparator";
import DiscountBox from "../../ui/DiscountBox";

const Wrapper = styled.article`
  flex: 1;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: max-content;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
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

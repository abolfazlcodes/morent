import React from "react";
import styled from "styled-components";
import PaymentCardHeader from "./PaymentCardHeader";
import LineSeparator from "../../ui/LineSeparator";
import PaymentCardRow from "./PaymentCardRow";
import DiscountBox from "../../ui/DiscountBox";
import PaymentCardSummary from "./PaymentCardSummary";

const PaymentCardWrapper = styled.article`
  flex: 1;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: max-content;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
`;

const PaymentCard: React.FC<{
  name: string;
  thumbnail: string;
  discount: number;
  pricePerDay: number;
  handleDiscount: (code: string) => void;
}> = ({ discount, name, pricePerDay, thumbnail, handleDiscount }) => {
  return (
    <PaymentCardWrapper>
      <PaymentCardHeader name={name} image={thumbnail} />
      <LineSeparator />

      <PaymentCardRow title='subtotal' price={pricePerDay} />
      <PaymentCardRow title='Tax' price='0' />

      {!discount && <DiscountBox handleDiscount={handleDiscount} />}

      <PaymentCardSummary totalPrice={pricePerDay} discount={discount} />
    </PaymentCardWrapper>
  );
};

export default PaymentCard;

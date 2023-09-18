import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-bg-grey);
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 2rem 0;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #1a202c;
  font-size: 1.6rem;
  font-weight: 600;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

interface DiscountBoxProps {
  handleDiscount: (code: string) => void;
}

function DiscountBox({ handleDiscount }: DiscountBoxProps) {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <Wrapper>
      <Input
        placeholder='Apply promo code'
        type='text'
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <Button onClick={() => handleDiscount(discountCode)}>Apply now</Button>
    </Wrapper>
  );
}

export default DiscountBox;

import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.span`
  color: #90a3bf;
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

const StyledPrice = styled.span`
  color: #1a202c;
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;
`;

interface PaymentCardRowProps {
  title: string;
  price: string;
}

function PaymentCardRow({ price, title }: PaymentCardRowProps) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>${price}</StyledPrice>
    </StyledWrapper>
  );
}

export default PaymentCardRow;

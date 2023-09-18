import styled from "styled-components";
import AllPaymentSteps from "../features/payment/AllPaymentSteps";

const StyledSection = styled.section`
  height: 100%;
  display: flex;
  padding: 2rem;
  gap: 2rem;

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
  }
`;

function Payment() {
  return (
    <>
      <StyledSection>
        <AllPaymentSteps />
      </StyledSection>
    </>
  );
}

export default Payment;

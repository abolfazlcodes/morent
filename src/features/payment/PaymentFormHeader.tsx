import styled from "styled-components";
import Heading from "../../ui/Heading";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-400);

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

interface PaymentFormHeaderProps {
  title: string;
  step: string;
  subtitle: string;
}

function PaymentFormHeader({ step, subtitle, title }: PaymentFormHeaderProps) {
  return (
    <header>
      <Heading as='h3' color='black'>
        {title}
      </Heading>
      <Wrapper>
        <StyledSpan>{subtitle}</StyledSpan>
        <StyledSpan>step {step} of 3</StyledSpan>
      </Wrapper>
    </header>
  );
}

export default PaymentFormHeader;

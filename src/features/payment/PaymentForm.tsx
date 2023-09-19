import styled from "styled-components";

const Wrapper = styled.div`
  flex: 2.5;
  border-radius: 1rem;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
`;

interface PaymentFormProps {
  children: React.ReactNode;
}

function PaymentForm({ children }: PaymentFormProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default PaymentForm;

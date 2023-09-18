import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #f6f7f9;
  margin: 2rem 0;
  border-radius: 1rem;
  font-size: 1.6rem;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const StyledCheckbox = styled.input`
  ${(props) =>
    props.type === "checkbox" &&
    css`
      width: 2rem;
      height: 2rem;
      accent-color: #1f2544;
    `}
`;

const StyledLabel = styled.label`
  font-size: inherit;
  font-weight: 600;
`;

interface CheckboxProps {
  id: string;
  label: string;
}

function PaymentCheckbox({ id, label }: CheckboxProps) {
  return (
    <Wrapper>
      <StyledCheckbox type='checkbox' id={id} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </Wrapper>
  );
}

export default PaymentCheckbox;

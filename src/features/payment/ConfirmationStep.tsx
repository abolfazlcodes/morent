import styled, { css } from "styled-components";
import { PaymentStepsProps } from "../../interfaces";
import PaymentFormHeader from "./PaymentFormHeader";

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

function ConfirmationStep({ handleChange }: PaymentStepsProps) {
  return (
    <>
      <PaymentFormHeader
        step='3'
        title='Confirmation'
        subtitle='We are getting to the end. Jus few clicks and your rental is ready!'
      />

      <Wrapper>
        <StyledCheckbox
          type='checkbox'
          id='newsletter'
          name='newsletter'
          onChange={(e) => handleChange(e)}
        />
        <StyledLabel htmlFor='newsletter'>
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed!
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledCheckbox
          type='checkbox'
          id='terms'
          name='policies'
          onChange={(e) => handleChange(e)}
        />
        <StyledLabel htmlFor='terms'>
          I agree with our terms and conditions and privacy policy.
        </StyledLabel>
      </Wrapper>
    </>
  );
}

export default ConfirmationStep;

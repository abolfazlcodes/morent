import PaymentCheckbox from "./Checkbox";
import PaymentFormHeader from "./PaymentFormHeader";

function ConfirmationStep() {
  return (
    <>
      <PaymentFormHeader
        step='3'
        title='Confirmation'
        subtitle='We are getting to the end. Jus few clicks and your rental is ready!'
      />

      <PaymentCheckbox
        id='newsletter'
        label='I agree with sending an Marketing and newsletter emails. No spam,
                promissed!'
      />
      <PaymentCheckbox
        id='terms'
        label='I agree with our terms and conditions and privacy policy.'
      />
    </>
  );
}

export default ConfirmationStep;

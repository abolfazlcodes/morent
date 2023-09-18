import styled from "styled-components";
import PaymentForm from "./PaymentForm";
import BillingInfoStep from "./BillingInfoStep";
import RentalInfoStep from "./RentalInfoStep";
import ConfirmationStep from "./ConfirmationStep";
import Button from "../../ui/Button";
import PaymentCard from "./PaymentCard";

const StyledStep = styled.article`
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
`;

function AllPaymentSteps() {
  return (
    <>
      <PaymentForm>
        <StyledStep>
          <BillingInfoStep />
        </StyledStep>

        <StyledStep>
          <RentalInfoStep />
        </StyledStep>

        <StyledStep>
          <ConfirmationStep />
        </StyledStep>

        <Button size='medium' variation='primary'>
          Rent Now
        </Button>
      </PaymentForm>

      <PaymentCard />
    </>
  );
}

export default AllPaymentSteps;

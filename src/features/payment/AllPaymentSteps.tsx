import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-hot-toast";

import PaymentForm from "./PaymentForm";
import BillingInfoStep from "./BillingInfoStep";
import RentalInfoStep from "./RentalInfoStep";
import ConfirmationStep from "./ConfirmationStep";
import Button from "../../ui/Button";
import PaymentCardHeader from "./PaymentCardHeader";
import LineSeparator from "../../ui/LineSeparator";
import PaymentCardRow from "./PaymentCardRow";
import DiscountBox from "../../ui/DiscountBox";
import PaymentCardSummary from "./PaymentCardSummary";
import { useCar } from "../cars/useCar";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { DISCOUNT_CODE, DISCOUNT_PERCENT } from "../../constants";

const StyledStep = styled.article`
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const PaymentCard = styled.article`
  flex: 1;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: max-content;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
`;

function AllPaymentSteps() {
  const { isLoading, carData } = useCar();
  const [discount, setDiscount] = useState(0);
  const [paymentInformation, setPaymentInformation] = useState<{
    [x: string]: string | boolean;
  }>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropOffLocation: "",
    dropOffDate: "",
    dropOffTime: "",
    newsletter: false,
    policies: false,
  });

  const paymentFormChangeHandler = (e: Event) => {
    const { target } = e;

    const isCheckbox =
      (target as HTMLInputElement).name !== "newsletter" &&
      (target as HTMLInputElement).name !== "policies";

    if (target) {
      const newObject = {
        ...paymentInformation,
        [(target as HTMLInputElement).name]: isCheckbox
          ? (target as HTMLInputElement).value
          : (target as HTMLInputElement).checked,
      };

      setPaymentInformation(newObject);
    }
  };

  const handleDiscount = (code: string) => {
    if (!code) toast.error("Please enter a code");

    if (code !== "" && code !== DISCOUNT_CODE) toast.error("Invalid code");

    if (code !== "" && code === DISCOUNT_CODE && carData?.pricePerDay) {
      const discount = (DISCOUNT_PERCENT * carData?.pricePerDay) / 100;
      setDiscount(discount);
      toast.success("Code applied successfully");
    }
  };

  useEffect(() => {
    // showing a toast notification for promo code
    toast(`You can use this promo code for a discount: ${DISCOUNT_CODE}`);
  }, []);

  if (isLoading) return <Spinner />;

  if (!carData) return <Empty resource='Car was not found' />;

  return (
    <>
      <PaymentForm>
        <StyledStep>
          <BillingInfoStep handleChange={paymentFormChangeHandler} />
        </StyledStep>

        <StyledStep>
          <RentalInfoStep handleChange={paymentFormChangeHandler} />
        </StyledStep>

        <StyledStep>
          <ConfirmationStep handleChange={paymentFormChangeHandler} />
        </StyledStep>

        <Button size='medium' variation='primary'>
          Rent Now
        </Button>
      </PaymentForm>

      <PaymentCard>
        <PaymentCardHeader name={carData.name} image={carData.thumbnail} />
        <LineSeparator />

        <PaymentCardRow title='subtotal' price={carData.pricePerDay} />
        <PaymentCardRow title='Tax' price='0' />

        {!discount && <DiscountBox handleDiscount={handleDiscount} />}

        <PaymentCardSummary
          totalPrice={carData?.pricePerDay}
          discount={discount}
        />
      </PaymentCard>
    </>
  );
}

export default AllPaymentSteps;

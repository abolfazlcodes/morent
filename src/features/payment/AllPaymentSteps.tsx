import { useEffect, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import PaymentForm from "./PaymentForm";
import BillingInfoStep from "./BillingInfoStep";
import RentalInfoStep from "./RentalInfoStep";
import ConfirmationStep from "./ConfirmationStep";
import Button from "../../ui/Button";
import { useCar } from "../cars/useCar";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { DISCOUNT_CODE, DISCOUNT_PERCENT } from "../../constants";
import PaymentCard from "./PaymentCard";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { checkProperties } from "../../utils/checkPaymentForm";

const StyledStep = styled.article`
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
`;

function AllPaymentSteps() {
  const { isLoading, carData } = useCar();
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
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
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const paymentFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handlePayment = () => {
    const result = checkProperties(paymentInformation);
    if (result) {
      setIsPaymentLoading(true);
      setTimeout(() => {
        navigate("/paymentSuccess");
      }, 5000);
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

        <Button size='medium' variation='primary' onClick={handlePayment}>
          {isPaymentLoading ? <SpinnerMini /> : "Rent Now"}
        </Button>
      </PaymentForm>

      <PaymentCard
        discount={discount}
        handleDiscount={handleDiscount}
        name={carData.name}
        pricePerDay={carData.pricePerDay}
        thumbnail={carData.thumbnail}
      />
    </>
  );
}

export default AllPaymentSteps;

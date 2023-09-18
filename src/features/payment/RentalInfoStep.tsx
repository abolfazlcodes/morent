import FormGrid from "../../ui/FormGrid";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import PaymentFormHeader from "./PaymentFormHeader";

function RentalInfoStep() {
  return (
    <>
      <PaymentFormHeader
        step='2'
        title='Rental Info'
        subtitle='Please enter your rental info'
      />

      <br />
      <Heading as='h4' color='black'>
        Pick-Up
      </Heading>
      <br />

      <FormGrid>
        <FormRowVertical label='Locations'>
          <Input
            type='text'
            id='pickupLocation'
            autoComplete='city'
            placeholder='City name'
          />
        </FormRowVertical>
        <FormRowVertical label='Date'>
          <Input
            type='date'
            id='pickupDate'
            autoComplete='date'
            placeholder='Select your date'
          />
        </FormRowVertical>
        <FormRowVertical label='Time'>
          <Input
            type='time'
            id='pickupTime'
            autoComplete='address'
            placeholder='Select your time'
          />
        </FormRowVertical>
      </FormGrid>

      <br />
      <Heading as='h4' color='black'>
        Drop-Off
      </Heading>
      <br />

      <FormGrid>
        <FormRowVertical label='Locations'>
          <Input
            type='text'
            id='dropOffLocation'
            autoComplete='city'
            placeholder='City name'
          />
        </FormRowVertical>
        <FormRowVertical label='Date'>
          <Input
            type='date'
            id='pickupDate'
            autoComplete='date'
            placeholder='Select your date'
          />
        </FormRowVertical>
        <FormRowVertical label='Time'>
          <Input
            type='time'
            id='pickupTime'
            autoComplete='address'
            placeholder='Select your time'
          />
        </FormRowVertical>
      </FormGrid>
    </>
  );
}

export default RentalInfoStep;

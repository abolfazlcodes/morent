import { PaymentStepsProps } from "../../interfaces";
import FormGrid from "../../ui/FormGrid";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import PaymentFormHeader from "./PaymentFormHeader";

function RentalInfoStep({ handleChange }: PaymentStepsProps) {
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
            name='pickupLocation'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Date'>
          <Input
            type='date'
            id='pickupDate'
            autoComplete='date'
            placeholder='Select your date'
            name='pickupDate'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Time'>
          <Input
            type='time'
            id='pickupTime'
            autoComplete='time'
            placeholder='Select your time'
            name='pickupTime'
            onChange={(e) => handleChange(e)}
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
            name='dropOffLocation'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Date'>
          <Input
            type='date'
            id='dropOffDate'
            autoComplete='date'
            placeholder='Select your date'
            name='dropOffDate'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Time'>
          <Input
            type='time'
            id='dropOffTime'
            autoComplete='time'
            placeholder='Select your time'
            name='dropOffTime'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
      </FormGrid>
    </>
  );
}

export default RentalInfoStep;

import { PaymentStepsProps } from "../../interfaces";
import FormGrid from "../../ui/FormGrid";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import PaymentFormHeader from "./PaymentFormHeader";

function BillingInfoStep({ handleChange }: PaymentStepsProps) {
  return (
    <>
      <PaymentFormHeader
        step='1'
        title='Billing Info'
        subtitle='Please enter your billing info'
      />
      <FormGrid>
        <FormRowVertical label='Name'>
          <Input
            type='text'
            id='name'
            autoComplete='name'
            placeholder='Your name'
            name='name'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Phone Number'>
          <Input
            type='tel'
            id='phone'
            name='phoneNumber'
            autoComplete='phone'
            placeholder='Phone number'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Address'>
          <Input
            type='text'
            id='address'
            name='address'
            autoComplete='address'
            placeholder='Address'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
        <FormRowVertical label='Town/City'>
          <Input
            type='text'
            id='town'
            name='city'
            autoComplete='city'
            placeholder='Town or city'
            onChange={(e) => handleChange(e)}
          />
        </FormRowVertical>
      </FormGrid>
    </>
  );
}

export default BillingInfoStep;

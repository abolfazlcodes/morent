import FormGrid from "../../ui/FormGrid";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import PaymentFormHeader from "./PaymentFormHeader";

function BillingInfoStep() {
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
          />
        </FormRowVertical>
        <FormRowVertical label='Phone Number'>
          <Input
            type='tel'
            id='phone'
            autoComplete='phone'
            placeholder='Phone number'
          />
        </FormRowVertical>
        <FormRowVertical label='Address'>
          <Input
            type='text'
            id='address'
            autoComplete='address'
            placeholder='Address'
          />
        </FormRowVertical>
        <FormRowVertical label='Town/City'>
          <Input
            type='text'
            id='town'
            autoComplete='city'
            placeholder='Town or city'
          />
        </FormRowVertical>
      </FormGrid>
    </>
  );
}

export default BillingInfoStep;

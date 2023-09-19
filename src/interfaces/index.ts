export interface PaymentStepsProps {
  handleChange: (e: Event) => void;
}

export interface PaymentForm {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime: string;
  dropOffLocation: string;
  dropOffDate: string;
  dropOffTime: string;
  newsletter: boolean;
  policies: boolean;
}

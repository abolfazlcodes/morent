import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Heading from "../../ui/Heading";
import { memo } from "react";

const StyledDescription = styled.p`
  color: var(--color-grey-400);
  line-height: 2.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

const StyledImageWrapper = styled.div`
  background-color: var(--color-blue-800);
  border-radius: 1rem;
  padding: 1rem;
  width: 20rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(LazyLoadImage)`
  width: 100%;
`;

interface PaymentHeaderProps {
  name: string;
  image: string;
}

const PaymentCardHeader = memo(function ({ image, name }: PaymentHeaderProps) {
  return (
    <>
      <header>
        <Heading as='h3' color='black'>
          Rental Summary
        </Heading>
        <StyledDescription>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </StyledDescription>
      </header>

      <StyledContainer>
        <StyledImageWrapper>
          <StyledImage src={image} alt='' effect='blur' />
        </StyledImageWrapper>
        <Heading as='h3' color='black'>
          {name}
        </Heading>
      </StyledContainer>
    </>
  );
});

export default PaymentCardHeader;

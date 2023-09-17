import styled from "styled-components";
import Heading from "./Heading";
import image from "../assets/ad bg 2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledDescription = styled.p`
  color: var(--color-grey-400);
  line-height: 2.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;
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

function PaymentCardHeader() {
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
        <Heading>Nissan GT - R</Heading>
      </StyledContainer>
    </>
  );
}

export default PaymentCardHeader;

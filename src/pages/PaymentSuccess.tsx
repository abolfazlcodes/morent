import styled from "styled-components";
import Heading from "../ui/Heading";
import LinkButton from "../ui/LinkButton";

const StyledCard = styled.div`
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: max-content;
  flex-direction: column;
  margin: auto;
  margin-top: 10%;
`;

const StyledDescription = styled.p`
  color: #404f5e;
  font-size: 20px;
  margin: 0;
  text-align: center;
`;

const StyledIcon = styled.i`
  color: #9abc66;
  font-size: 100px;
  line-height: 200px;
  margin-left: -15px;
`;

const Wrapper = styled.div`
  border-radius: 200px;
  height: 200px;
  width: 200px;
  background: #f8faf5;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PaymentSuccess() {
  return (
    <>
      <StyledCard>
        <Wrapper>
          <StyledIcon>✓</StyledIcon>
        </Wrapper>
        <Heading as='h2' color='grey'>
          Success
        </Heading>
        <StyledDescription>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </StyledDescription>
        <LinkButton to='/'> Home Page</LinkButton>
      </StyledCard>
    </>
  );
}

export default PaymentSuccess;

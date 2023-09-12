import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledCardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCardPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
`;

const StyledCardPriceDay = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #90a3bf;
`;

interface CardFooterProps {
  id: number;
  pricePerDay: number;
  btnSize?: "small" | "medium" | "large";
}

function CardFooter({ id, pricePerDay, btnSize = "small" }: CardFooterProps) {
  return (
    <StyledCardFooter>
      <div>
        <StyledCardPrice>${pricePerDay}.00/</StyledCardPrice>
        <StyledCardPriceDay>day</StyledCardPriceDay>
      </div>

      <Link to={`/cars/${id}`}>
        <Button size={btnSize} variation='primary'>
          Rent now
        </Button>
      </Link>
    </StyledCardFooter>
  );
}

export default CardFooter;

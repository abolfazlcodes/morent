import { Link } from "react-router-dom";
import Button from "./Button";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin-left: auto;

  @media screen and (max-width: 730px) {
    width: 100%;
  }
`;

const TotalCarsSpan = styled.span`
  color: var(--color-grey-400);
  font-size: 1.4rem;
`;

interface TotalCarsOverviewPops {
  numOfCars: number;
}

function TotalCarsOverview({ numOfCars }: TotalCarsOverviewPops) {
  return (
    <Wrapper>
      <Link to='/cars'>
        <Button size='large' variation='primary'>
          Show more car
        </Button>
      </Link>
      <TotalCarsSpan>{numOfCars} Cars</TotalCarsSpan>
    </Wrapper>
  );
}

export default TotalCarsOverview;

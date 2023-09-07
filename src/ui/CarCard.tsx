import { HiOutlineHeart } from "react-icons/hi2";
import car from "../assets/sample car.png";
import Heading from "./Heading";
import { GearBox, TankIcon, Users } from "../utils/helpers";
import Button from "./Button";
import { styled } from "styled-components";

const StyledArticle = styled.article`
  width: 30rem;
  height: 36rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  row-gap: 1rem;
`;

const StyledCardHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const StyledCardCategory = styled.span`
  color: #90a3bf;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
`;

const StyledCardIcon = styled.span`
  font-size: 2.2rem;
  cursor: pointer;
`;

const StyledCardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCardImage = styled.img`
  width: 90%;
`;

const StyledCardOverview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
`;

const StyledCardOverviewDetail = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #90a3bf;
`;

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

// interface CarCardProps {}

const CarCard = () => {
  return (
    <StyledArticle>
      <StyledCardHeader>
        <div>
          <Heading as='h3' color='black'>
            Koenigsegg
          </Heading>
          <StyledCardCategory>sport</StyledCardCategory>
        </div>

        <StyledCardIcon>
          <HiOutlineHeart />
        </StyledCardIcon>
      </StyledCardHeader>

      <StyledCardImageWrapper>
        <StyledCardImage src={car} alt='sample car name' />
      </StyledCardImageWrapper>

      <StyledCardOverview>
        <StyledCardOverviewDetail>
          <TankIcon />
          <span>90 L</span>
        </StyledCardOverviewDetail>

        <StyledCardOverviewDetail>
          <GearBox />
          <span>Manual</span>
        </StyledCardOverviewDetail>

        <StyledCardOverviewDetail>
          <Users />
          <span>2 people</span>
        </StyledCardOverviewDetail>
      </StyledCardOverview>

      <StyledCardFooter>
        <div>
          <StyledCardPrice>$99.00/</StyledCardPrice>
          <StyledCardPriceDay>day</StyledCardPriceDay>
        </div>

        <Button size='small' variation='primary'>
          Rent now
        </Button>
      </StyledCardFooter>
    </StyledArticle>
  );
};

export default CarCard;

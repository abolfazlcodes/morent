import { HiOutlineHeart } from "react-icons/hi2";
import car from "../assets/sample car.png";
import Heading from "./Heading";
import { GearBox, TankIcon, Users } from "../utils/helpers";
import Button from "./Button";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";

type StyledItemsProps = {
  type: "typeA" | "typeB";
};

const StyledArticle = styled.article<StyledItemsProps>`
  width: 30rem;
  height: 36rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;

  ${(props) =>
    props.type === "typeA" &&
    css`
      grid-template-rows: 1fr 2fr 1fr 1fr;
    `}

  ${(props) =>
    props.type === "typeB" &&
    css`
      grid-template-rows: 1fr 3fr 1fr;
    `}
  
  @media screen and (max-width: 550px) {
    width: 90%;
  }
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
  position: relative;
`;

const StyledCardImage = styled.img<StyledItemsProps>`
  ${(props) =>
    props.type === "typeA" &&
    css`
      width: 90%;
    `}

  ${(props) =>
    props.type === "typeB" &&
    css`
      width: 100%;
    `}
`;

const StyledCardOverview = styled.div<StyledItemsProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  ${(props) =>
    props.type === "typeB" &&
    css`
      @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: start;
        width: 35%;
        height: 70%;
      }

      @media screen and (max-width: 380px) {
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: initial;
      }
    `}
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

const StyledCardDetailsTypeB = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 550px) {
    flex-direction: row;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const StyledBgOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  z-index: 10;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
`;

interface CarCardProps {
  type?: "typeA" | "typeB";
}

const CarCard = ({ type = "typeA" }: CarCardProps) => {
  const renderCarDetails = () => {
    if (type === "typeA") {
      return (
        <>
          <StyledCardImageWrapper>
            <StyledBgOverlay />
            <StyledCardImage type={type} src={car} alt='sample car name' />
          </StyledCardImageWrapper>

          <StyledCardOverview type={type}>
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
        </>
      );
    } else {
      return (
        <StyledCardDetailsTypeB>
          <StyledCardImageWrapper>
            <StyledBgOverlay />
            <StyledCardImage type={type} src={car} alt='sample car name' />
          </StyledCardImageWrapper>

          <StyledCardOverview type={type}>
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
        </StyledCardDetailsTypeB>
      );
    }
  };

  return (
    <StyledArticle type={type}>
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

      {/*// ? rendering details based on their types */}
      {renderCarDetails()}

      <StyledCardFooter>
        <div>
          <StyledCardPrice>$99.00/</StyledCardPrice>
          <StyledCardPriceDay>day</StyledCardPriceDay>
        </div>

        <Button size='small' variation='primary'>
          <Link to='/cars/1'>Rent now</Link>
        </Button>
      </StyledCardFooter>
    </StyledArticle>
  );
};

export default CarCard;
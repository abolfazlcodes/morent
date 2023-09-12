import { GearBox, TankIcon, Users } from "../utils/helpers";
import { css, styled } from "styled-components";
import { CarProps } from "../interfaces/cars.interface";
import BookmarkHeart from "./BookmarkHeart";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

type StyledItemsProps = {
  type: "typeA" | "typeB";
};

const StyledArticle = styled.article<StyledItemsProps>`
  width: 32rem;
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
  
  @media screen and (max-width: 650px) {
    width: 27rem;
  }
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
  z-index: 5;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
`;

interface CarCardProps {
  type?: "typeA" | "typeB";
  carData: CarProps;
}

const CarCard = ({ type = "typeA", carData }: CarCardProps) => {
  const {
    id,
    automatic,
    capacity,
    category,
    image,
    name,
    pricePerDay,
    tankCapacity,
  } = carData;

  const renderCarDetails = () => {
    if (type === "typeA") {
      return (
        <>
          <StyledCardImageWrapper>
            <StyledBgOverlay />
            <StyledCardImage type={type} src={image} alt={name} />
          </StyledCardImageWrapper>

          <StyledCardOverview type={type}>
            <StyledCardOverviewDetail>
              <TankIcon />
              <span>{tankCapacity} L</span>
            </StyledCardOverviewDetail>

            <StyledCardOverviewDetail>
              <GearBox />
              <span>{automatic ? "automatic" : "manual"}</span>
            </StyledCardOverviewDetail>

            <StyledCardOverviewDetail>
              <Users />
              <span>{capacity} people</span>
            </StyledCardOverviewDetail>
          </StyledCardOverview>
        </>
      );
    } else {
      return (
        <StyledCardDetailsTypeB>
          <StyledCardImageWrapper>
            <StyledBgOverlay />
            <StyledCardImage type={type} src={image} alt={name} />
          </StyledCardImageWrapper>

          <StyledCardOverview type={type}>
            <StyledCardOverviewDetail>
              <TankIcon />
              <span>{tankCapacity} L</span>
            </StyledCardOverviewDetail>

            <StyledCardOverviewDetail>
              <GearBox />
              <span>{automatic ? "automatic" : "manual"}</span>
            </StyledCardOverviewDetail>

            <StyledCardOverviewDetail>
              <Users />
              <span>{capacity} people</span>
            </StyledCardOverviewDetail>
          </StyledCardOverview>
        </StyledCardDetailsTypeB>
      );
    }
  };

  return (
    <StyledArticle type={type}>
      <CardHeader title={name} subtitle={category}>
        <BookmarkHeart carData={carData} />
      </CardHeader>

      {/*// ? rendering details based on their types */}
      {renderCarDetails()}

      <CardFooter id={id} pricePerDay={pricePerDay} />
    </StyledArticle>
  );
};

export default CarCard;

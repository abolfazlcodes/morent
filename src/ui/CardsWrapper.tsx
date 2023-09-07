import { styled } from "styled-components";
import CarCard from "./CarCard";
import car from "../assets/sample car.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import Button from "./Button";
import TotalCarsOverview from "./TotalCarsOverview";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
`;

const fakeCarsData = [
  {
    id: 1,
    name: "All new rush",
    pricePerDay: 72,
    capacity: 6,
    automatic: false,
    tankCapacity: 70,
    category: "SUV",
    image: car,
  },
  {
    id: 2,
    name: "CR - V",
    pricePerDay: 80,
    capacity: 6,
    automatic: false,
    tankCapacity: 80,
    category: "SUV",
    image: car,
  },
  {
    id: 3,
    name: "Koenigsegg",
    pricePerDay: 99,
    capacity: 2,
    automatic: false,
    tankCapacity: 90,
    category: "Sport",
    image: car,
  },
  {
    id: 4,
    name: "Nissan GT - R",
    pricePerDay: 100,
    capacity: 2,
    automatic: true,
    tankCapacity: 80,
    category: "Sport",
    image: car,
  },
  {
    id: 5,
    name: "Rolls - Royce",
    pricePerDay: 96,
    capacity: 4,
    automatic: true,
    tankCapacity: 70,
    category: "Sedan",
    image: car,
  },
  {
    id: 6,
    name: "MGZX Exclusive",
    pricePerDay: 76,
    capacity: 4,
    automatic: true,
    tankCapacity: 80,
    category: "Hatchback",
    image: car,
  },
  {
    id: 7,
    name: "All new rush",
    pricePerDay: 72,
    capacity: 6,
    automatic: false,
    tankCapacity: 70,
    category: "SUV",
    image: car,
  },
  {
    id: 8,
    name: "CR - V",
    pricePerDay: 80,
    capacity: 6,
    automatic: false,
    tankCapacity: 80,
    category: "SUV",
    image: car,
  },
  {
    id: 9,
    name: "Koenigsegg",
    pricePerDay: 99,
    capacity: 2,
    automatic: false,
    tankCapacity: 90,
    category: "Sport",
    image: car,
  },
  {
    id: 10,
    name: "Nissan GT - R",
    pricePerDay: 100,
    capacity: 2,
    automatic: true,
    tankCapacity: 80,
    category: "Sport",
    image: car,
  },
];

function CardsWrapper() {
  return (
    <>
      <Header
        title='popular cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />
      <div>Swiper component</div>
      <br />
      <Header
        title='recommended cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />
      <StyledWrapper>
        {fakeCarsData.map((carItem) => (
          <CarCard key={carItem.id} carData={carItem} />
        ))}
      </StyledWrapper>

      {/* show more button */}
      <TotalCarsOverview numOfCars={fakeCarsData.length} />
    </>
  );
}

export default CardsWrapper;

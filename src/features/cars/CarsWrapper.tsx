import styled from "styled-components";
import CarCard from "../../ui/CarCard";
import { useCars } from "./useCars";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { CarProps } from "../../interfaces/cars.interface";
import { useSearchParams } from "react-router-dom";
import { filterCarsHandler } from "../../utils/filterCarsHandler";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 3rem 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-ms-scrollbar {
    display: none;
  }
`;

function CarsWrapper() {
  const { isLoading, cars } = useCars();
  const [searchParams] = useSearchParams();
  const typeFilterValues = searchParams.get("Type");
  const capacityFilterValues = searchParams.get("Capacity");

  if (isLoading) return <Spinner />;

  if (cars && cars?.length < 1) return <Empty resource='cars' />;

  let filteredCars: CarProps[];

  if (typeFilterValues) {
    filteredCars = filterCarsHandler(cars, {
      field: "category",
      values: typeFilterValues.split(","),
    });
  } else if (capacityFilterValues) {
    filteredCars = filterCarsHandler(cars, {
      field: "capacity",
      values: capacityFilterValues.split(","),
    });
  } else {
    filteredCars = cars!;
  }

  if (filteredCars.length === 0) return <Empty resource='No car found' />;

  return (
    <StyledWrapper>
      {filteredCars &&
        filteredCars?.map((carItem: CarProps) => (
          <CarCard type='typeB' key={carItem.id} carData={carItem} />
        ))}
    </StyledWrapper>
  );
}

export default CarsWrapper;

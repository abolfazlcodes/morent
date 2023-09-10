import styled from "styled-components";
import CarCard from "../../ui/CarCard";
import { useCars } from "./useCars";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { CarProps } from "../../interfaces/cars.interface";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 3rem 2rem;
`;

function CarsWrapper() {
  const { isLoading, cars } = useCars();

  if (isLoading) return <Spinner />;

  if (cars && cars?.length < 1) return <Empty resource='cars' />;

  return (
    <StyledWrapper>
      {cars &&
        cars?.map((carItem: CarProps) => (
          <CarCard type='typeB' key={carItem.id} carData={carItem} />
        ))}
    </StyledWrapper>
  );
}

export default CarsWrapper;

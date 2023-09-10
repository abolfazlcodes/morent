import { styled } from "styled-components";
import { SwiperSlide } from "swiper/react";
import CarCard from "./CarCard";
import Header from "./Header";
import TotalCarsOverview from "./TotalCarsOverview";

import SwiperComponent from "./SwiperComponent";
import { useCars } from "../features/cars/useCars";
import Spinner from "./Spinner";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
`;

function HomePageCarsWrapper() {
  const { isLoading, cars } = useCars();

  return (
    <>
      <Header
        title='popular cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />

      <SwiperComponent>
        {isLoading && <Spinner />}
        {cars?.slice(6, 12).map((item) => (
          <SwiperSlide key={item.id}>
            <CarCard carData={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <br />

      <Header
        title='recommended cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />

      {isLoading && <Spinner />}

      {!isLoading && cars && (
        <>
          <StyledWrapper>
            {cars?.slice(0, 8).map((carItem) => (
              <CarCard key={carItem.id} carData={carItem} type='typeB' />
            ))}
          </StyledWrapper>

          {/* show more button */}
          <TotalCarsOverview numOfCars={cars?.length} />
        </>
      )}
    </>
  );
}

export default HomePageCarsWrapper;

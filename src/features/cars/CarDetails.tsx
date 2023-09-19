import styled from "styled-components";
import ImagePreview from "../../ui/ImagePreview";
import CardHeader from "../../ui/CardHeader";
import BookmarkHeart from "../../ui/BookmarkHeart";
import CardStats from "../../ui/CardStats";
import CardFooter from "../../ui/CardFooter";

import { useCar } from "./useCar";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import Header from "../../ui/Header";
import SwiperComponent from "../../ui/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import CarCard from "../../ui/CarCard";
import { useCars } from "./useCars";
import CarReviews from "./CarReviews";

const StyledCarDetails = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 990px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`;

const StyledDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 4.8rem;
  background: #fff;
  border-radius: 1rem;
  height: 47rem;

  @media screen and (max-width: 990px) {
    width: 90%;
    height: max-content;
    gap: 2.8rem;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

function CarDetails() {
  const { isLoading, carData } = useCar();
  const { isLoading: isLoadingAllCars, cars } = useCars();

  if (isLoading) return <Spinner />;

  if (!carData) return <Empty resource='Car was not found' />;

  return (
    <>
      <StyledCarDetails>
        <ImagePreview
          thumbnail={carData.images.at(0)}
          images={carData.images}
        />

        <StyledDetails>
          <CardHeader title={carData.name} subtitle='rating + 2 Reviewers'>
            <BookmarkHeart carData={carData} />
          </CardHeader>

          <CardStats
            capacity={carData.capacity}
            category={carData.category}
            steering={carData.automatic}
            tankCapacity={carData.tankCapacity}
            description="NISMO has become the embodiment of Nissan's outstanding
          performance, inspired by the most unforgiving proving ground, the
          race track."
          />

          <CardFooter
            link={`/payment/${carData.id}`}
            pricePerDay={carData.pricePerDay}
            btnSize='medium'
          />
        </StyledDetails>
      </StyledCarDetails>

      <CarReviews />

      <Header
        title='Recent Cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />

      <SwiperComponent>
        {isLoadingAllCars && <Spinner />}

        {cars && cars?.length < 1 && <Empty resource='cars' />}

        {cars?.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <CarCard carData={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <Header
        title='Recommended Cars'
        titleColor='grey'
        titleType='h4'
        link='/cars'
      />

      <SwiperComponent>
        {isLoadingAllCars && <Spinner />}

        {cars && cars?.length < 1 && <Empty resource='cars' />}

        {cars?.slice(5, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <CarCard carData={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
}

export default CarDetails;

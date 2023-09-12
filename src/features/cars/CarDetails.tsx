import styled from "styled-components";
import carImage from "../../assets/image 8.png";
import ImagePreview from "../../ui/ImagePreview";
import CardHeader from "../../ui/CardHeader";
import BookmarkHeart from "../../ui/BookmarkHeart";
import CardStats from "../../ui/CardStats";
import CardFooter from "../../ui/CardFooter";

const sampleCar = {
  id: 1,
  automatic: true,
  capacity: 2,
  category: "sport",
  image: carImage,
  name: "Nissan GT - R",
  pricePerDay: 80,
  tankCapacity: 70,
};

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
  gap: 2.8rem;
  background: #fff;
  border-radius: 1rem;
  height: 44rem;

  @media screen and (max-width: 990px) {
    width: 90%;
    height: max-content;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

function CarDetails() {
  return (
    <StyledCarDetails>
      <ImagePreview thumbnail={sampleCar.image} />

      <StyledDetails>
        <CardHeader title={sampleCar.name} subtitle='rating + 2 Reviewers'>
          <BookmarkHeart carData={sampleCar} />
        </CardHeader>

        <CardStats
          capacity={sampleCar.capacity}
          category={sampleCar.category}
          steering={sampleCar.automatic}
          tankCapacity={sampleCar.tankCapacity}
          description="NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              race track."
        />

        <CardFooter
          id={sampleCar.id}
          pricePerDay={sampleCar.pricePerDay}
          btnSize='medium'
        />
      </StyledDetails>
    </StyledCarDetails>
  );
}

export default CarDetails;

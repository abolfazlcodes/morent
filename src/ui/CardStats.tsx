import styled from "styled-components";

const StyledCarDetailsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.7rem;

  span:nth-child(odd) {
    color: #90a3bf;
    font-weight: 400;
  }

  span:nth-child(even) {
    color: #596780;
    font-weight: 600;
  }
`;

const StyledDescription = styled.p`
  font-size: 1.7rem;
  color: #596780;
  line-height: 4rem;
`;

interface CardStatsProps {
  capacity: number;
  category: string;
  tankCapacity: number;
  steering: boolean;
  description: string;
}

function CardStats({
  capacity,
  category,
  tankCapacity,
  steering,
  description,
}: CardStatsProps) {
  return (
    <>
      <StyledDescription>{description}</StyledDescription>
      <StyledCarDetailsStats>
        <span>Type of Car</span>
        <span>{category}</span>
        <span>Capacity</span>
        <span>{capacity} People</span>
        <span>Steering</span>
        <span>{steering ? "Automatic" : "Manual"}</span>
        <span>Gasoline</span>
        <span>{tankCapacity}L</span>
      </StyledCarDetailsStats>
    </>
  );
}

export default CardStats;

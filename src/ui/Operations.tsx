import styled, { css } from "styled-components";
import Filter from "./Filter";

interface OperationsProps {
  isOpen: boolean;
}

const StyledOperations = styled.aside<OperationsProps>`
  background-color: var(--color-white);
  padding: 1rem;
  height: 100dvh;

  @media screen and (max-width: 550px) {
    position: absolute;
    z-index: 10;
    width: 0;
    top: 0;
    left: -30%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in;
  }

  ${(props) =>
    props.isOpen &&
    css`
      @media screen and (max-width: 550px) {
        width: 70%;
        left: 0;
        visibility: visible;
        opacity: 1;
      }
    `}
`;

function Operations({ isOpen }: OperationsProps) {
  return (
    <StyledOperations isOpen={isOpen}>
      <Filter
        filterField='Type'
        options={[
          { value: "Sport", label: "Sport" },
          { value: "SUV", label: "SUV" },
          { value: "MPV", label: "MPV" },
          { value: "Sedan", label: "Sedan" },
          { value: "Coupe", label: "Coupe" },
          { value: "Hatchback", label: "Hatchback" },
        ]}
      />

      <Filter
        filterField='Capacity'
        options={[
          { value: "2", label: "2 People" },
          { value: "4", label: "4 People" },
          { value: "6", label: "6 People" },
          { value: "8", label: "8 People" },
        ]}
      />
    </StyledOperations>
  );
}

export default Operations;

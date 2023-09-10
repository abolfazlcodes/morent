import styled from "styled-components";
import Filter from "./Filter";

const StyledOperations = styled.aside`
  background-color: var(--color-white);
  padding: 1rem;
`;

function Operations() {
  return (
    <StyledOperations>
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

import styled from "styled-components";
import FormRowVertical from "./FormRowVertical";
import Checkbox from "./Checkbox";
import { useSearchParams } from "react-router-dom";

const StyledCategoryText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
`;

const StyledFilter = styled.div`
  margin-bottom: 2rem;
`;

interface FilterProps {
  filterField: string;
  options: { value: string; label: string }[];
}

function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField);

  const handleClick = (value: string) => {
    // Split the current filter values into an array
    const currentValues = currentFilter ? currentFilter.split(",") : [];
    // Check if the clicked value is in the current filter values
    const isChecked = currentValues.includes(value);
    if (isChecked) {
      // If the value is already checked, remove it from the array
      const updatedValues = currentValues.filter((v) => v !== value);
      // Join the updated values back into a string
      const updatedFilter = updatedValues.join(",");
      // Set the updated filter as the new query parameter
      searchParams.set(filterField, updatedFilter);
      setSearchParams(searchParams);
    } else {
      // If the value is not checked, add it to the array
      currentValues.push(value);
      // Join the updated values back into a string
      const updatedFilter = currentValues.join(",");

      searchParams.set(filterField, updatedFilter);
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledFilter>
      <StyledCategoryText>{filterField}</StyledCategoryText>
      {options.map((item) => (
        <FormRowVertical key={item.value} type='horizontal' label={item.label}>
          <Checkbox
            id={item.value}
            onClick={handleClick}
            active={Boolean(currentFilter?.includes(item.value))}
          />
        </FormRowVertical>
      ))}
    </StyledFilter>
  );
}

export default Filter;

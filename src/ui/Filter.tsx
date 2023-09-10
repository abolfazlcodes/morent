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

  let isChecked: boolean;

  const handleClick = (value: string) => {
    isChecked = Boolean(currentFilter?.includes(value));

    if (isChecked) {
      const newFilterValue = currentFilter?.replace(`${value}`, "") as string;
      searchParams.set(filterField, newFilterValue);
      setSearchParams(searchParams);

      // return as we do not want to add it again
      return;
    }

    if (currentFilter && !isChecked) {
      searchParams.set(filterField, `${currentFilter}-${value}`);
    } else {
      searchParams.set(filterField, value);
    }

    setSearchParams(searchParams);
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

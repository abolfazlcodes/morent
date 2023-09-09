import styled from "styled-components";
import Checkbox from "./Checkbox";
import FormRowVertical from "./FormRowVertical";

const StyledFilter = styled.aside`
  background-color: var(--color-white);
  padding: 1rem;
`;

const StyledCategoryText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
`;

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

function Filter() {
  return (
    <StyledFilter>
      <Wrapper>
        <StyledCategoryText>Type</StyledCategoryText>
        <FormRowVertical type='horizontal' label='Sport'>
          <Checkbox id='Sport' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='SUV'>
          <Checkbox id='SUV' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='MVP'>
          <Checkbox id='MVP' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='Sedan'>
          <Checkbox id='Sedan' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='Coupe'>
          <Checkbox id='Coupe' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='Hatchback'>
          <Checkbox id='Hatchback' />
        </FormRowVertical>
      </Wrapper>

      <Wrapper>
        <StyledCategoryText>Capacity</StyledCategoryText>
        <FormRowVertical type='horizontal' label='2 People'>
          <Checkbox id='2 People' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='4 People'>
          <Checkbox id='4 People' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='6 People'>
          <Checkbox id='6 People' />
        </FormRowVertical>
        <FormRowVertical type='horizontal' label='8 People'>
          <Checkbox id='8 People' />
        </FormRowVertical>
      </Wrapper>
    </StyledFilter>
  );
}

export default Filter;

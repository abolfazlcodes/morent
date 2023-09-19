import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

interface FormGrid {
  children: React.ReactNode;
}

function FormGrid({ children }: FormGrid) {
  return <Wrapper>{children}</Wrapper>;
}

export default FormGrid;

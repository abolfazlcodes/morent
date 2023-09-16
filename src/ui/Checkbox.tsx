import styled from "styled-components";

const StyledCheckboxWrapper = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  position: relative;

  &:hover {
    input {
      &:not(:checked) {
        border: var(--color-grey-300);
      }
    }
  }
`;

const StyledCheckbox = styled.input`
  display: block;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 1rem;
`;

StyledCheckbox.defaultProps = {
  type: "checkbox",
};

interface CheckboxProps {
  id: string;
  onClick: (value: string) => void;
  active: boolean;
}

function Checkbox({ id, onClick, active }: CheckboxProps) {
  const handleCheck = () => {
    onClick(id);
  };

  return (
    <StyledCheckboxWrapper onClick={handleCheck}>
      <StyledCheckbox checked={active} id={id} />
    </StyledCheckboxWrapper>
  );
}

export default Checkbox;

import styled, { css } from "styled-components";

type StyledFormRowType = {
  type: "vertical" | "horizontal";
};

const StyledFormRow = styled.div<StyledFormRowType>`
  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 0;

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      align-items: center;

      & label {
        order: 1;
        font-size: 1.5rem;
      }

      & span {
        order: 2;
      }
    `}
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--color-grey-500);
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

interface FormVerticalProps {
  label?: string;
  error?: string;
  children?: React.ReactElement;
  type?: "vertical" | "horizontal";
}

StyledFormRow.defaultProps = {
  type: "vertical",
};

function FormRowVertical({
  label,
  error,
  children,
  type = "vertical",
}: FormVerticalProps) {
  return (
    <StyledFormRow data-test='form-row' type={type}>
      {label && <Label htmlFor={children?.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;

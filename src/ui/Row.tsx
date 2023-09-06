import { css, styled } from "styled-components";

type StyledRowTypes = {
  type: "verticalEnd" | "vertical" | "horizontal";
};

const Row = styled.div<StyledRowTypes>`
  display: flex;

  ${(props) =>
    props.type === "verticalEnd" &&
    css`
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      align-items: center;
      gap: 3rem;

      @media screen and (max-width: 768px) {
      }
    `}


    ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
